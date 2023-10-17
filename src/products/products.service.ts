import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
// import { CreateProductDto } from './dto/create-product.dto';
// import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {

  private products: {
    id: string
    name: string,
  }[] = []


  create(name: string) {

    this.products.push({
      id: uuid(),
      name
    })
  }

  getAll() {
    return this.products
  }

  update(id: string, newText: string) {
    this.products = this.products.map((product) => {
      if (id === product.id) {
        product.name = newText
      }

      return product
    })
  }

  delete(id: string) {
    this.products = this.products.filter((e) => e.id !== id)
  }
}
