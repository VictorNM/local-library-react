import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import BookPage from './BookPage';
import rootState from '../../../modules/rootState';
import rootSelector from '../../../modules/rootSelector';

const mapStateToProps = (state: rootState) => ({
    isGetDetailSucceed: rootSelector.getIsGetBookDetailSucceed(state),
    isCreateSucceed: rootSelector.getIsCreateBookSucceed(state),
    isUpdateSucceed: rootSelector.getIsUpdateBookSucceed(state),
    isDeleteSucceed: rootSelector.getIsDeleteBookSucceed(state)
})

export default connect(
    mapStateToProps,
    null
)(BookPage)