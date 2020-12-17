import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Task extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "task";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      title: { type: types.TEXT, not_null: true },
      description: { type: types.TEXT },
      duration: { type: types.NUMERIC, not_null: true },
      deadline: { type: types.DATETIME },
      time_spent: { type: types.NUMERIC, default: 0 },
      status: { type: types.BOOLEAN, default: true },
    };
  }
}
