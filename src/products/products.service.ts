import { Injectable } from '@nestjs/common';
import { Products } from 'src/interfaces/products.interface';

@Injectable()
export class ProductsService {
    private readonly products: Products[] =[];

    create(products:Products){
        let id = this.products.length + 1;
        let productsCreated = {...products, id: id}
        this.products.push(productsCreated);
    }

    findAll():Products[]{
        return this.products
    }

    delete():Products[]{
        let arrayDeleted = this.products;
        for (let i = 0; i < arrayDeleted.length; i--) {
            arrayDeleted.pop()
            
        }
        return this.products
    }

    update(id, products:Products){

        console.log(typeof id)
        console.log(products)

        let elementIndex = this.products.findIndex((obj => obj.id === parseInt(id)));

        let prodFinal = {...products, id: elementIndex+1}
        this.products[elementIndex] = prodFinal

        return this.products

        
    }
}
