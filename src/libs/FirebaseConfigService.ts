import { readFileSync } from 'fs';
import admin from 'firebase-admin';
import path from 'path';
import { Service } from 'typedi';

import { ConfigService } from './ConfigService';

@Service()
export class FirebaseConfigService {
  private admin;
  constructor(private configService: ConfigService) {
    // const serviceAccount = require(path.resolve(__dirname, '../../', this.configService.get<string>('FIRESTORE_CREDENTIALS')));
    const serviceAccount = readFileSync(
      path.resolve(
        __dirname,
        '../../',
        this.configService.get<string>('FIRESTORE_CREDENTIALS')
      )
    );
    admin.initializeApp({
      credential: admin.credential.cert(JSON.parse(serviceAccount.toString())),
      storageBucket: this.getBucketName(),
    });
    this.admin = admin;
  }

  getFirebaseAdmin(): typeof admin {
    return this.admin;
  }

  getBucketName(): string {
    return this.configService.get<string>('FIRESTORE_BUCKET_NAME');
  }

  generateDownloadLinkFromFileName(fileName: string): string {
    const bucketName = encodeURIComponent(this.getBucketName());
    const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/';
    const token = path.parse(fileName).name;
    return `${baseUrl + bucketName}/o/${fileName}?alt=media&token=${token}`;
  }
}
