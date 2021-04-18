export interface CreateStoreProductData {
  storeId: string;
  ProductId: string;
  distanceFromOrigin: number;
}

export interface UpdateStoreProductData {
  storeId?: string;
  ProductId?: string;
  distanceFromOrigin?: number;
  isActive?: boolean;
}
