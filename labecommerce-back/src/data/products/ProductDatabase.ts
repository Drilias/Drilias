import { Product } from "../../entities/Product";
import { Ticket } from "../../entities/Ticket";
import { BaseDatabase } from "../BaseDatabase";

export class ProductDatabase extends BaseDatabase {

   private static tableName = "labecommerce_products"

   private toProduct = (input: any): Product => {
      if (input.origin)
         return new Ticket(
            input.id,
            input.name,
            input.description,
            input.price,
            input.origin,
            input.destination
         )
      else
         return new Product(
            input.id,
            input.name,
            input.description,
            input.price
         )
   }

   createProduct = (product: Product) => 
      BaseDatabase
         .connection(ProductDatabase.tableName)
         .insert(product)


   getAllProducts = async () => {
      const result = await BaseDatabase
         .connection(ProductDatabase.tableName)

      return result.map(this.toProduct)
   }
}