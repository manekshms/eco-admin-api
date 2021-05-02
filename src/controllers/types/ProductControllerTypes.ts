export interface CreateProductReqData {
  categoryId: string;
  name: string;
  description: string;
  brand: string;
  imageName: string;
  ecoRating: string;
  packagingScore: string;
  carbonFootprint: number;
}

export interface UpdateProductReqData {
  categoryId?: string;
  name?: string;
  description?: string;
  brand?: string;
  imageName?: string;
  ecoRating?: string;
  packagingScore?: string;
  carbonFootprint?: number;
  isActive?: boolean;
}
