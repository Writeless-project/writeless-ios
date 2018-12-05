import { connect } from 'react-redux';
import { deleteJournal } from '../actions';
import AllJournals from '../components/AllJournals';

const mapDispatchToProps = dispatch => {
    return {
        deleteJournal: () => {
            dispatch(deleteJournal());
        }
    }
}

const DeleteJournalContainer = connect(
    null,
    mapDispatchToProps
)(AllJournals);

export default DeleteJournalContainer;