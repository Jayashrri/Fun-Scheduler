import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Preferences extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "preferences";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      key: { type: types.TEXT, not_null: true },
      value: { type: types.TEXT, not_null: true },
    };
  }
}
