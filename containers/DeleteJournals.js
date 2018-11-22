import { connect } from 'react-redux';
import { deleteJournals } from '../actions';
import DeleteJournals from '../components/DeleteJournals';

const mapDispatchToProps = dispatch => {
    return {
        deleteJournals: () => {
            dispatch(deleteJournals());
        }
    }
}

const DeleteJournalsContainer = connect(
    null,
    mapDispatchToProps
)(DeleteJournals);

export default DeleteJournalsContainer;