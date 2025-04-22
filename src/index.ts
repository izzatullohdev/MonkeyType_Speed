import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
dotenv.config();

// Routers
import authRoutes from "./routes/auth.routes";
import testResultRoutes from "./routes/testResult.routes";
import { errorHandler } from "./middlewares/errorHandler";
const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", testResultRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
});
