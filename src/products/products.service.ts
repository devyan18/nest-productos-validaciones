import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(product_name: string) {
    return await this.productModel.create({ product_name })
  }

  async getAll() {
    return await this.productModel.find() 
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
