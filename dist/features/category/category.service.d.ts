import { Model, ObjectId } from "mongoose";
import { CategoryDocument } from "src/core/models/category.schema";
import { AddCategory } from "./dto/category.dto";
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<CategoryDocument>);
    addCategory(addCategory: AddCategory): Promise<CategoryDocument>;
    updateCategory(addCategory: AddCategory, id: string): Promise<CategoryDocument>;
    getAllCategories(): Promise<CategoryDocument[]>;
    deleteCategory(id: ObjectId): Promise<string>;
}
