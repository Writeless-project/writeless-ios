import { connect } from 'react-redux';
import { editJournal } from '../actions';
import EditJournal from '../components/EditJournal';

const mapDispatchToProps = dispatch => {
    return {
        editJournal: (formValues, journal)=> {
            dispatch(editJournal(formValues, journal));
        }
    }
}

const EditJournalContainer = connect(
    null,
    mapDispatchToProps
)(EditJournal);

export default EditJournalContainer;