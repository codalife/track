import { SQLite } from 'expo';

const sqlite = {
  save: (type, key, value) => {
    db.transaction(`CREATE TABLE`);
  },
};

export const createDB = name => {
  return SQLite.openDatabase({ name });
};

// element schema is a SQLite query string

export const startDB = (db, tables, callback) => {
  tables.forEach(element =>
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ?(?)`,
        [element.name, element.schema],
        (tx, sucessObj) => {
          if (callback) callback(successObj);
        },
        error => console.log(error),
      );
    }),
  );
};
