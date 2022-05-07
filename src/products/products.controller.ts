import {Body, Controller, Get, Put, Delete, Post, Param} from '@nestjs/common'
import { CreateProductsDto } from 'src/dto/create-products.dto';
import { Products } from 'src/interfaces/products.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService:ProductsService){}

    @Post()
    async create(@Body() createProducts: CreateProductsDto){
        this.productsService.create(createProducts)
    }

    @Get()
    async findAll(): Promise<Products[]> {
        return this.productsService.findAll();
    }

    @Delete()
    async delete(): Promise<Products[]>{
        return this.productsService.delete();
    }
    @Put(':id')
    async update(@Param() params, @Body() updateProd: CreateProductsDto){
        this.productsService.update(params.id, updateProd)
    }
}
