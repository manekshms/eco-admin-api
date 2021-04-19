export interface CreateCategoryReqData {
  name: string;
  description: string;
}

export interface UpdateCategoryReqData {
  name?: string;
  description?: string;
  isActive?: boolean;
}
