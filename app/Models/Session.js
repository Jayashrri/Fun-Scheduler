import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Session extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "session";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      task: { type: types.INTEGER, not_null: true },
      start_time: { type: types.DATETIME, not_null: true },
      duration: { type: types.NUMERIC },
    };
  }
}
