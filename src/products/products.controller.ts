import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MongoidPipe } from './pipes/mongoid.pipe';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productsService.create(product)
  }

  @Get()
  findAll() {
    return this.productsService.getAll()
  }

  @Get(":productId")
  findOne (@Param("productId", MongoidPipe) productId: string) {
    return this.productsService.getOne(productId)
  }

  @Patch(":productId")
  editProduct(@Param("productId", MongoidPipe) productId: string, @Body() { product_name }: UpdateProductDto) {
    this.productsService.update(productId, product_name)
  }

  @Delete(":productId")
  deleteProduct (@Param("productId", MongoidPipe) productId: string) {
    this.productsService.delete(productId)
  }
}
