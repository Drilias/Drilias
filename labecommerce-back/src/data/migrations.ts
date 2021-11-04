import { BaseDatabase } from "./BaseDatabase";

const database = new BaseDatabase()

database
   .createTables()
   .then(database.insertUsers)
   .then(database.insertProducts)
   .then(database.insertPurchases)
   .finally(database.closeConnection)