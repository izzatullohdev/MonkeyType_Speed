import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: "postgres",
    logging: false,
  }
);
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection failed", error));

export default sequelize;
