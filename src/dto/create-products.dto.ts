import { ApiProperty } from '@nestjs/swagger'

export class CreateProductsDto{
    @ApiProperty()
    readonly id:number;

    @ApiProperty()
    readonly title:string;
    
    @ApiProperty()
    readonly price:number;
    
    @ApiProperty()
    readonly photo:string;
    
    @ApiProperty()
    readonly description:string;
    
    @ApiProperty()
    readonly category:string;
}