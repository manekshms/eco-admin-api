import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateCategoryReqData } from '../controllers/types/CategoryControllerTypes';
import { Category } from '../entities/Category';
import { CreateCategoryData } from './types/CategoryServiceTypes';

@Service()
export class CategoryService {
  public async createCategory(
    createCategoryData: CreateCategoryData
  ): Promise<Category> {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = {
      ...createCategoryData,
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    const category = await Category.create(data).save();
    return category;
  }

  public async updateCategoryById(
    id: string,
    updateCategoryData: UpdateCategoryReqData
  ): Promise<Category> {
    const category = await Category.findOne(id);
    if (!category) {
      throw new NotFoundError('Category not found');
    }
    if (updateCategoryData.name) {
      category.name = updateCategoryData.name;
    }
    if (updateCategoryData.description) {
      category.description = updateCategoryData.description;
    }
    if (typeof updateCategoryData.isActive === 'boolean') {
      category.isActive = updateCategoryData.isActive;
    }
    await category.save();
    return category;
  }
}
