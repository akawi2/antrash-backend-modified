import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "src/core/models/category.schema";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AddCategory } from "./dto/category.dto";
import { ObjectId } from "mongoose";

@ApiTags('category')
@Controller('category')
export class CategoryController{
    constructor(
        private readonly categoryService: CategoryService
    ){}

    @ApiResponse({type: Category})
    @Post('/')
    async addCategory(@Body() addCategory:AddCategory): Promise<Category>{
        return this.categoryService.addCategory(addCategory)
    }

    @ApiResponse({type: Category})
    @Patch('/update/:id')
    async updateCategory(@Param('id') id: string,@Body() addCategory:AddCategory): Promise<Category>{
        return this.categoryService.updateCategory(addCategory, id)
    }

    @ApiResponse({type: Category})
    @Delete('/delete/:id')
    async deleteCategory(@Param('id') id: ObjectId): Promise<string>{
        return this.categoryService.deleteCategory(id)
    }

    @ApiResponse({type: Category})
    @Get('/')
    async allCategories(): Promise<Category[]>{
        return this.categoryService.getAllCategories()
    }
}