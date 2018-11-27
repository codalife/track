Dev tools used:

1. create-react-native-app //https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app
2. android studio https://developer.android.com/studio/
3. genymotion https://docs.expo.io/versions/latest/workflow/genymotion#__next

To work with SQLite directly:

1. adb devices // see device_name. example 192.168.56.101:5555
2. adb -s {device_name} shell
3. In adb sheel find . -name "{db name}" // gives pwd of the db = DBpwd Example: ./host.exp.exponent/files/ExperienceData/%40codalife%2FpillTracker/SQLite/medications
4. sqlite3 <DBpwd>
5. query db
