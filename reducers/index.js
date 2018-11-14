import {
    ADD_JOURNAL,
    UPDATE_JOURNAL,
    DELETE_JOURNAL,
    FETCH_ALL_JOURNALS,
    RECEIVE_JOURNALS
} from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export const saveJournals = async state => {
    try {
        await AsyncStorage.setItem('Journals', JSON.stringify(state));
    } catch (err) {
        console.log(`Error (saveJouransl): ${err.message}`);
    }
};

const Journal = (state, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            return {
                id: action.id,
                title: action.payload,
                createdAt: new Date()
            }
        default:
            return state;

    }
};

const AddJournal = (state = [], action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            const journals = [...state, Journal(null, action)];
            saveJournals(journals);

            return journals;
        case RECEIVE_JOURNALS:
            return action.payload;
        default:
            return state;
    }
};

export default AddJournal;