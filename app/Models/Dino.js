import * as SQLite from "expo-sqlite";
import { BaseModel, types } from "expo-sqlite-orm";

export default class Dino extends BaseModel {
  constructor(obj) {
    super(obj);
  }

  static get database() {
    return async () => SQLite.openDatabase("database.db");
  }

  static get tableName() {
    return "dino";
  }

  static get columnMapping() {
    return {
      id: { type: types.INTEGER, primary_key: true },
      type: { type: types.TEXT, not_null: true },
      is_unlocked: { type: types.BOOLEAN, not_null: true, default: false },
      image_url: { type: types.TEXT, not_null: true },
    };
  }
}
