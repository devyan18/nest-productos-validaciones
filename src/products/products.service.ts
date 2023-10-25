import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(product: CreateProductDto) {
    return await this.productModel.create(product)
  }

  async getAll() {
    return await this.productModel.find().populate('category', { __v: 0 })
  }

  async getOne(id: string) {
    return await this.productModel.findById(id)
  }

  async update(id: string, newText: string) {
    return await this.productModel.findByIdAndUpdate(id, { product_name: newText }, { new: true })
  }

  async delete(id: string) {
    await this.productModel.findByIdAndDelete(id)
  }
}
