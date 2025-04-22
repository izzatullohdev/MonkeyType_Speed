// src/models/TestResult.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import User from "./User";

class TestResult extends Model {
  public id!: number;
  public wpm!: number;
  public raw!: number;
  public consistency!: number;
  public time!: number;
  public accuracy!: number;
  public score!: number;
  public userId!: number;
}

TestResult.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    wpm: { type: DataTypes.FLOAT, allowNull: false },
    raw: { type: DataTypes.FLOAT, allowNull: false },
    consistency: { type: DataTypes.FLOAT, allowNull: false },
    time: { type: DataTypes.FLOAT, allowNull: false },
    accuracy: { type: DataTypes.FLOAT, allowNull: false },
    score: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "test_result",
    tableName: "test_results",
    timestamps: true,
  }
);

// 🔗 userId bilan bog‘lash
User.hasMany(TestResult, { foreignKey: "userId" });
TestResult.belongsTo(User, { foreignKey: "userId" });

export default TestResult;
