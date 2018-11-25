import { SQLite } from 'expo';

const sqlite = {
  save: (type, key, value) => {
    db.transaction(`CREATE TABLE`);
  },
};

export const createDB = name => {
  return SQLite.openDatabase(name);
};

// element.schema is a SQLite query string

export const createTables = (db, tables, callback) => {
  const createTablesPromises = tables.map(element => {
    return new Promise((resolve, reject) => {
      db.transaction(
        tx =>
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS ${element.name}(${element.schema});`,
            [],
          ),
        error => reject(error),
        success => resolve('is success?'),
      );
    });
  });

  Promise.all(createTablesPromises)
    .then(results => console.log('SQLite: success creating tables'))
    .catch(err => {
      console.log('SQLite: err in creating tables');
      console.log(err);
    });
};
