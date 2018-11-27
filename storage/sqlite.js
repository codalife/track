import { SQLite } from 'expo';

let db;

export const sqlite = {
  save: (type, keys, values) => {
    return new Promise((resolve, reject) => {
      console.log(
        `insert into ?(${keys.join(',')}) values (${values
          .map(item => '?')
          .join(',')});`,
      );

      const query = ``;
      console.log([type, ...values]);
      db.transaction(tx => {
        tx.executeSql(
          `insert into ${type}(${keys.join(',')}) values(${values
            .map(item => '?')
            .join(',')})`,
          values,
          error => {
            console.log(error);
            reject(error);
          },
          (tx, success) => {
            console.log(`successfully got in ${success}`);
            console.log(success);
            resolve(success);
          },
        );
      });
    });
  },
  getAll: type => {
    return new Promise((resolve, reject) => {
      console.log(`select * from ?;`);
      console.log([type]);
      db.transaction(tx => {
        tx.executeSql(
          `select * from ?;`,
          [type],
          error => {
            console.log(error);
            reject(error);
          },
          success => {
            console.log(`successfully saved in ${type}`);
            resolve(success);
          },
        );
      });
    });
  },
};

export const createDB = name => {
  db = SQLite.openDatabase(name);
  return db;
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
