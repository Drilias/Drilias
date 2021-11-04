import { Request, Response } from "express";
import { ProductDatabase } from "../../data/products/ProductDatabase";
import { Product } from "../../entities/Product";
import { CustomError } from "../../error/CustomError";
import { IdGenerator } from "../../services/IdGenerator";

export const createProduct = async (
   req: Request,
   res: Response
) => {
   try {

      const { name, price, description } = req.body

      const id = new IdGenerator().execute()

      const product = new Product(
         id,
         name,
         description,
         price
      )

      await new ProductDatabase().createProduct(product)

      res.status(201).send({ product })

   } catch (error) {

      if (error instanceof CustomError)
         res
            .status(error.statusCode)
            .send(error.message)
      else
         res
            .status(500)
            .send("Internal error, please contact support")
   }
}