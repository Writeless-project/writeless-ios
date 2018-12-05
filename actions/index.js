import * as actionTypes from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';

// export const addEntry = (entry, journal) => {
//     return {
//         type: actionTypes.ADD_ENTRY,
//         id: Date.now(),
//         payload: {entry, journal}
//     }
// };

// export const deleteEntry = entryId => {
//     return {
//         type: DELETE_JOURNAL,
//         payload: { entryId }
//     }
// };

const _addJournal = journals => {
    return {
        type: actionTypes.ADD_JOURNAL,
        journals: journals
    }
};

export const addJournal = (journal) => {
    return async (dispatch) => {
        // if we can access the state here, we won't need to get the journals again here
        let journals = JSON.parse(await AsyncStorage.getItem('Journals')) || [];
        
        // add the new journal here instead of in the reducer, because of the async await needed to set AsyncStorage
        journals.push({
            id: Date.now(),
            title: journal.title,
            content: journal.content,
            createdAt: new Date()
        });
        
        await AsyncStorage.setItem('Journals', JSON.stringify(journals)); // set the journals in AsyncStorage
        dispatch(_addJournal(journals)); // set the journals in the state
    }
};

const _deleteJournal = journals => {
    return {
        type: actionTypes.DELETE_JOURNAL,
        journals: journals,
    }
};

export const deleteJournal = (id) => {
    return async (dispatch) => {
        // if we can access the state here, we won't need to get the journals again here
        let journals = JSON.parse(await AsyncStorage.getItem('Journals'));

        // only keep the journals that aren't the deleted journal
        journals = journals.filter(journal => journal.id !== id);

        await AsyncStorage.setItem('Journals', JSON.stringify(journals)); // set the journals in AsyncStorage
        dispatch(_deleteJournal(journals)); // set the journals in the state
    }
};

const _deleteJournals = () => {
    return {
        type: actionTypes.DELETE_JOURNALS
    }
};

export const deleteJournals = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('Journals'); // remove the journals from AsyncStorage
        dispatch(_deleteJournals()); // remove the journals from the state
    }
};

const _fetchAllJournals = journals => {
    return {
        type: actionTypes.RECEIVE_JOURNALS,
        journals: journals
    }
}; 

export const fetchAllJournals = () => {
    return async dispatch => {
        const journals = await AsyncStorage.getItem('Journals');
        dispatch(_fetchAllJournals(JSON.parse(journals)));
    }
};
