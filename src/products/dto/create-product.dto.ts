import { IsNotEmpty, IsString } from "class-validator"

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    product_name: string

    @IsNotEmpty()
    @IsString()
    category: string
}   
