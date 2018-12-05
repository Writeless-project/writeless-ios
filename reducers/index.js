import * as actionTypes from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export const saveJournals = async journals => {
    try {
        await AsyncStorage.setItem('Journals', JSON.stringify(journals));
    } catch (err) {
        console.error(`Error (saveJournals): ${err.message}`);
    }
};

export const deleteJournals = async () => {
    try {
        await AsyncStorage.removeItem('Journals');
    } catch (err) {
        console.error(`Error (deleteJournals): ${err.message}`);
    }
}

const Journal = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_JOURNAL:
            return {
                id: action.id,
                title: action.journal.title,
                content: action.journal.content,
                createdAt: new Date()
            }
        default:
            return state;
    }
};

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_JOURNAL:
            let journals = [...state, Journal(null, action)];
            saveJournals(journals);
            return journals;
        case actionTypes.RECEIVE_JOURNALS:
            return action.journals;
        case actionTypes.DELETE_JOURNALS:
            deleteJournals();
            return; // we might need to return something here
        case actionTypes.DELETE_JOURNAL:
            return action.journals;
        default:
            return state;
    }
};
