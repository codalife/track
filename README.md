To work with SQLite directly:

1. adb devices // see device_name
2. adb -s {device_name} shell
3. In adb sheel find . -name "{db name}" // gives pwd of the db = DBpwd Example: ./host.exp.exponent/files/ExperienceData/%40codalife%2FpillTracker/SQLite/medications
4. sqlite3 DBpwd
5. query db
