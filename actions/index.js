import * as actionTypes from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

export const addEntry = (entry, journal) => {
    return {
        type: actionTypes.ADD_ENTRY,
        id: Date.now(),
        payload: {entry, journal}
    }
};

export const addJournal = journal => {
    return {
        type: actionTypes.ADD_JOURNAL,
        id: Date.now(),
        journal: journal
    }
};

export const receiveJournals = journals => {
    return {
        type: actionTypes.RECEIVE_JOURNALS,
        journals: journals
    }
}; 

export const deleteJournals = () => {
    return {
        type: actionTypes.DELETE_JOURNALS
    }
};

export const _deleteJournal = journals => {
    console.log('delete journals pt.2')
    return {
        type: actionTypes.DELETE_JOURNAL,
        journals: journals,
    }
};

export const deleteJournal = (id) => {
    return async (dispatch) => {
        let journals = JSON.parse(await AsyncStorage.getItem('Journals'));
        journals = journals.filter(journal => journal.id !== id);
        await AsyncStorage.setItem('Journals', JSON.stringify(journals));
        dispatch(_deleteJournal(journals));
    }
};

export const fetchAllJournals = () => {
    return async dispatch => {
        const journals = await AsyncStorage.getItem('Journals');
        dispatch(receiveJournals(JSON.parse(journals)));
    }
};
