import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
dotenv.config();
import cors from "cors";
// Routers
import authRoutes from "./routes/auth.routes";
import testResultRoutes from "./routes/testResult.routes";
import adminRoutes from "./routes/admin.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // yoki agar frontend public bo‘lsa: '*'
  })
);
app.use("/api", authRoutes);
app.use("/api", testResultRoutes);

app.use("/api", adminRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
});
