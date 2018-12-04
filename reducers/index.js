import {
    ADD_ENTRY,
    ADD_JOURNAL,
    UPDATE_JOURNAL,
    DELETE_JOURNAL,
    DELETE_JOURNALS,
    FETCH_ALL_JOURNALS,
    RECEIVE_JOURNALS
} from '../constants/ActionTypes';
import { AsyncStorage } from 'react-native';
import { fetchAllJournals } from '../actions';

export const saveJournals = async state => {
    try {
        await AsyncStorage.setItem('Journals', JSON.stringify(state));
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

export const deleteJournal = async (state, action) => {
    try {
        /* get all Journals from async storage */
        var journals = JSON.parse(await AsyncStorage.getItem('Journals'));
        /* filter by ID */
        journals = JSON.stringify(journals.filter(journal => {
            if (journal.id !== action.payload.journalId) console.log(journal.title)
            return journal.id !== action.payload.journalId
        }));

        /* merge new Jourals item to asyncStorage */
        await AsyncStorage.setItem('Journals', journals);
        console.log(`stateeee: ${JSON.stringify(state)}`);
        return state;
    } catch (err) {
        console.error(`Error (deleteJournal): ${err.message}`);
    }
}

const Journal = (state, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            return {
                id: action.id,
                title: action.payload.title,
                content: action.payload.content,
                createdAt: new Date()
            }
        default:
            return state;
    }
};

const AddJournal = (state, action) => {
    switch (action.type) {
        case ADD_JOURNAL:
            if (!state) {
                state = [];
            }
            let journals = [...state, Journal(null, action)];
            saveJournals(journals);
            return journals;
        case RECEIVE_JOURNALS:
            return action.payload;
        case DELETE_JOURNALS:
            deleteJournals();
            return;
        case DELETE_JOURNAL:
            console.log(`action.payload: ${JSON.stringify(action.payload)}`);
            console.log(`journals before: ${JSON.stringify(state)}`);
            state = deleteJournal(state, action);
            console.log('not yetttt')
            return state;
        default:
            return state;
    }
};

export default AddJournal;