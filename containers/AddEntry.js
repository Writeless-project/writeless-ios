import { connect } from 'react-redux';
import { addEntry } from '../actions';
import AddEntry from '../components/AddEntry';

const mapDispatchToProps = dispatch => {
    return {
        addEntry: (entry, journal) => {
            dispatch(addEntry(entry, journal));
        }
    }
}

const AddEntryContainer = connect(
    null,
    mapDispatchToProps
)(AddEntry);

export default AddEntryContainer;