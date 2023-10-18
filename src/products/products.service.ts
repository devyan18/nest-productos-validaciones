import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async create(name: string) {
    return await this.productModel.create({ name });
  }

  async getAll() {
    return await this.productModel.findAll();
  }

  async update(id: number, newText: string) {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new BadRequestException('Product not found');
    }
    product.name = newText;
    return await product.save();
  }

  async delete(id: number) {
    return await this.productModel.destroy({ where: { id } });
  }
}
