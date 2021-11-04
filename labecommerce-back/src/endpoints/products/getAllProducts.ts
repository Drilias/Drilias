import { Request, Response } from "express";
import { ProductDatabase } from "../../data/products/ProductDatabase";
import { CustomError } from "../../error/CustomError";

export const getAllProducts = async (
   req: Request,
   res: Response
) => {
   try {

      const products = await new ProductDatabase().getAllProducts()

      res.send(products)

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