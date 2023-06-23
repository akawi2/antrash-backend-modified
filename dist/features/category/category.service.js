"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("../../core/models/category.schema");
let CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async addCategory(addCategory) {
        const testCategory = await this.categoryModel.findOne({ name: addCategory.name });
        if (!testCategory) {
            const newCategory = new this.categoryModel({
                name: addCategory.name,
                image: addCategory.image
            });
            newCategory.save();
            return newCategory;
        }
        else {
            throw new Error('Category already exist enter another');
        }
    }
    async updateCategory(addCategory, id) {
        const category = await this.categoryModel.findOneAndUpdate({ _id: id }, addCategory, { new: true });
        if (category) {
            return category;
        }
        else {
            throw new Error('This name wasn\'t found');
        }
    }
    async getAllCategories() {
        const categories = await this.categoryModel.find().exec();
        return categories;
    }
    async deleteCategory(id) {
        const getcategory = await this.categoryModel.findOne({ _id: id });
        const category = await this.categoryModel.findOneAndDelete({ _id: id });
        if (category) {
            return "Category with name " + getcategory.name + " was deleted successfully";
        }
        else {
            throw new Error('This name wasn\'t found');
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map