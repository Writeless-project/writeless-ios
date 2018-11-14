import { connect } from 'react-redux';
import { addJournal } from '../actions';
import AddJournal from '../components/AddJournal';

const mapDispatchToProps = dispatch => {
    return {
        addJournal: journal => {
            dispatch(addJournal(journal));
        }
    }
}

const AddJournalContainer = connect(
    null,
    mapDispatchToProps
)(AddJournal);

export default AddJournalContainer;