export interface CreateProductData {
  categoryId: string;
  name: string;
  description: string;
  brand: string;
  imageName: string;
  ecoRating: string;
  packagingScore: string;
  carbonFootprint: number;
}

export interface UpdateProductData {
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
