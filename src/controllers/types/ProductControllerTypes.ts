export interface CreateProductReqData {
  categoryId: string;
  name: string;
  description: string;
  brand: string;
  imageName?: string;
  ecoRating: string;
  packaging: string;
  carbonFootprint: number;
}

export interface UpdateProductReqData {
  categoryId?: string;
  name?: string;
  description?: string;
  brand?: string;
  imageName?: string;
  ecoRating?: string;
  packaging?: string;
  carbonFootprint?: number;
  isActive?: boolean;
}
