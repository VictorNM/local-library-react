import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import GenrePage from './GenrePage';
import rootState from '../../../modules/rootState';
import rootSelector from '../../../modules/rootSelector';

const mapStateToProps = (state: rootState) => ({
    isGetDetailSucceed: rootSelector.getIsGetGenreDetailSucceed(state),
    isCreateSucceed: rootSelector.getIsCreateGenreSucceed(state),
    isUpdateSucceed: rootSelector.getIsUpdateGenreSucceed(state),
    isDeleteSucceed: rootSelector.getIsDeleteGenreSucceed(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenrePage)