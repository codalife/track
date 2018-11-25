export const DBName = 'medications';

export const tables = [
  {
    name: 'cmon',
    schema: 'id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR',
  },
  {
    name: 'periods',
    schema: 'id integer primary key, start text, end text',
  },
  {
    name: 'dosages',
    schema: 'id integer primary key, volume integer, unit text',
  },
];
