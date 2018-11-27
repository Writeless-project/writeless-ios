import { connect } from 'react-redux';
import { deleteJournal } from '../actions';
import JournalList from '../components/JournalList';

const mapDispatchToProps = dispatch => {
    return {
        deleteJournal: id => {
            // console.log(`id: ${id}`);
            dispatch(deleteJournal(id));
        }
    }
}

const JournalListContainer = connect(
    null,
    mapDispatchToProps
)(JournalList);

export default JournalListContainer;