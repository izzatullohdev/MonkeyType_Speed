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
    pool: {
      max: 10, // 10 foydalanuvchi bir vaqtda
      min: 2, // har doim 2 connection ochiq turadi
      acquire: 30000, // 30s kutadi agar busy bo‘lsa
      idle: 10000, // 10s dan keyin yopiladi
    },
  }
);
sequelize
  .authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection failed", error));

export default sequelize;
