import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() { name }: CreateProductDto) {
    return this.productsService.create(name)
  }

  @Get()
  findAll() {
    return this.productsService.getAll()
  }

  @Patch(":productId")
  editProduct(@Param("productId", ParseUUIDPipe) productId: string, @Body() {name}: UpdateProductDto) {
    this.productsService.update(productId, name)
  }

  @Delete(":productId")
  deleteProduct (@Param("productId", ParseUUIDPipe) productId: string) {
    this.productsService.delete(productId)
  }
}
