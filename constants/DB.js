export const DBName = 'medications';

export const tables = [
  {
    name: 'names',
    schema: 'id INTEGER PRIMARY KEY AUTOINCREMENT,name text',
  },
  {
    name: 'periods',
    schema:
      'id integer primary key, start text, end text, name_id integer not null, foreign key(names_id) references names(id)',
  },
  {
    name: 'dosages',
    schema: 'id integer primary key, volume integer, unit text',
  },
];
