import { connect } from 'react-redux';

import AuthorPage from './AuthorPage';
import rootState from '../../../modules/rootState';
import rootSelector from '../../../modules/rootSelector';

const mapStateToProps = (state: rootState) => ({
    isGetDetailSucceed: rootSelector.getIsGetAuthorDetailSucceed(state),
    isCreateSucceed: rootSelector.getIsCreateAuthorSucceed(state),
    isUpdateSucceed: rootSelector.getIsUpdateAuthorSucceed(state),
    isDeleteSucceed: rootSelector.getIsDeleteAuthorSucceed(state)
})

export default connect(
    mapStateToProps,
    null
)(AuthorPage)