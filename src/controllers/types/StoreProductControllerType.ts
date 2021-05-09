export interface CreateStoreProductReqData {
  storeId: string;
  ProductId: string;
  distanceFromOrigin: number;
}

export interface UpdateStoreProductReqData {
  storeId?: string;
  ProductId?: string;
  distanceFromOrigin?: number;
  isActive?: boolean;
}
