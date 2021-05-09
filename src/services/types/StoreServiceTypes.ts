export interface CreateStoreData {
  name: string;
  address: string;
  location: string;
  phoneNumber: string;
  website: string;
}

export interface UpdateStoreData {
  name?: string;
  address?: string;
  location?: string;
  phoneNumber: string;
  website: string;
  isActive?: boolean;
}

export interface CreateStoreProductData {
  storeId: string;
  ProductId: string;
  distanceFromOrigin: number;
}

export interface productInfo {
  productId: string;
  name: string;
  description: string;
}
