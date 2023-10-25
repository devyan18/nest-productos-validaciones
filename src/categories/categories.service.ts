import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto)
  }

  findAll() {
    return this.categoryModel.find()
  }

  async findOne(id: string) {

    const findedCategory = await this.categoryModel.findById(id)

    if(!findedCategory) throw new NotFoundException('Category not found')

    return findedCategory
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {

    await this.findOne(id)

    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {new: true})
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id)
  }
}
