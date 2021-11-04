import { User } from "../../entities/User";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase {

   private static tableName = "labecommerce_users"

   private toUser = (input: any): User => new User(
      input.id,
      input.name,
      input.email,
      input.age
   )

   createUser = (user: User) =>
      BaseDatabase
         .connection(UserDatabase.tableName)
         .insert(user)


   getAllUsers = async () => {
      const result = await BaseDatabase
         .connection(UserDatabase.tableName)

      return result.map(this.toUser)
   }

   getUserByEmail = async (email: string) => {
      const [result] = await BaseDatabase
         .connection(UserDatabase.tableName)
         .where({ email })

      if (result) return this.toUser(result)
   }
}