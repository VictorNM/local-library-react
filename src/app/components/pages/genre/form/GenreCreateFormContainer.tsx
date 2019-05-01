import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreCreateForm from './GenreCreateForm';
import rootActions from '../../../../modules/rootActions';
import { Genre } from '../../../../../dto';

const genreActions = rootActions.genreActions

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        onHide: ownProps.onHide
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onSubmit: (genre: Genre) => dispatch(genreActions.createGenreAsync(genre))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreCreateForm);