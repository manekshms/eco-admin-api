import app from './app';
import { ConfigService } from './libs/ConfigService';

const configService = new ConfigService();
const port = configService.get('PORT') || 3000;
app.listen(port, () => {
  const { log } = console;
  log('Server running on port 3000');
});
