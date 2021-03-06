import { Request, Response } from "express";
import { UserDatabase } from "../../data/users/UserDatabase";
import { User } from "../../entities/User";
import { CustomError } from "../../error/CustomError";
import { IdGenerator } from "../../services/IdGenerator";

export const createUser = async (
   req: Request,
   res: Response
) => {
   try {

      const userDB = new UserDatabase()

      const { name, age, email } = req.body

      const user = await userDB.getUserByEmail(email)

      if (user) throw new CustomError(409, "Email already in use")

      const id = new IdGenerator().execute()

      const newUser = new User(
         id,
         name,
         email,
         age
      )

      await userDB.createUser(newUser)

      res.status(201).send({ user: newUser })

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