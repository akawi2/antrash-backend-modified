import { CategoryService } from "./category.service";
import { Category } from "src/core/models/category.schema";
import { AddCategory } from "./dto/category.dto";
import { ObjectId } from "mongoose";
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    addCategory(addCategory: AddCategory): Promise<Category>;
    updateCategory(id: string, addCategory: AddCategory): Promise<Category>;
    deleteCategory(id: ObjectId): Promise<string>;
    allCategories(): Promise<Category[]>;
}
