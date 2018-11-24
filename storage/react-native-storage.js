import {AsyncStorage} from 'react-native'; 

const store = {
    _storeData: async (key, value, callback) => {
        try {
            await AsyncStorage.setItem(key, value);
            if (callback) callback({key: value});
        } catch (error) {
            // Error saving data
        }
    },
    _retrieveData = async (key, callback) => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                callback(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    }
};
