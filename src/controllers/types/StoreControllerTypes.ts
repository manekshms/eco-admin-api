export interface CreateStoreReqData {
  name: string;
  address: string;
  location: string;
  phoneNumber: string;
  website: string;
}

export interface UpdateStoreReqData {
  name?: string;
  address?: string;
  location?: string;
  phoneNumber?: string;
  website?: string;
  isActive?: boolean;
}

export interface CreateStoreProductReqData {
  storeId: string;
  ProductId: string;
  distanceFromOrigin: number;
}
