import { connect } from 'react-redux';

import ErrorModal from './ErrorModal';
import rootSelector from '../../../modules/rootSelector';
import { Dispatch } from 'redux';

const mapStateToProps = (state: any) => ({
    show: rootSelector.getError(state) !== null,
    error: JSON.stringify(rootSelector.getError(state))
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onHide: () => dispatch({type: 'CLEAR_ERROR'})
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorModal)