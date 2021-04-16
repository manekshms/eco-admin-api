import {
  Body,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { Category } from '../entities/Category';
import {
  createCategoryValidators,
  updateCategoryByIdValidators,
} from '../middlewares/validators/CategoryValidators';
import { CategoryService } from '../services/CategoryService';
import {
  CreateCategoryReqData,
  UpdateCategoryReqData,
} from './types/CategoryControllerTypes';

@Service()
@JsonController('/category')
export class CategoryController {
  public constructor(private categoryService: CategoryService) {}

  @UseBefore(...createCategoryValidators)
  @Post('/')
  public async createCategory(
    @Body() createCategoryReqData: CreateCategoryReqData
  ): Promise<Category> {
    const category = await this.categoryService.createCategory(
      createCategoryReqData
    );
    return category;
  }

  @UseBefore(...updateCategoryByIdValidators)
  @Patch('/:id')
  public async updateCategoryById(
    @Param('id') id: string,
    @Body() updateCategoryReqData: UpdateCategoryReqData
  ): Promise<Category> {
    const category = await this.categoryService.updateCategoryById(
      id,
      updateCategoryReqData
    );
    return category;
  }
}
