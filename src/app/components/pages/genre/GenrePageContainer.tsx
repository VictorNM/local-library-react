import { connect } from 'react-redux';

import GenrePage from './GenrePage';
import rootState from '../../../modules/rootState';
import rootSelector from '../../../modules/rootSelector';

const mapStateToProps = (state: rootState) => ({
    isGetDetailSucceed: rootSelector.getIsGetGenreDetailSucceed(state),
    isCreateSucceed: rootSelector.getIsCreateGenreSucceed(state),
    isUpdateSucceed: rootSelector.getIsUpdateGenreSucceed(state),
    isDeleteSucceed: rootSelector.getIsDeleteGenreSucceed(state)
})

export default connect(
    mapStateToProps,
    null
)(GenrePage)