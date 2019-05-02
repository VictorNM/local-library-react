import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreEditForm from './GenreEditForm';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';
import { Genre } from '../../../../../dto';

const genreActions = rootActions.genreActions;

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        initialValues: rootSelector.getCurrentGenre(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: any) => {
    return {
        onSubmit: (genre: Genre) => dispatch(genreActions.updateGenreAsync(genre)),
        onHide() {
            ownProps.onHide();
            dispatch(genreActions.clearCurrentGenre());
        },
        handleDelete(id: number) {
            dispatch(genreActions.deleteGenreAsync(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreEditForm);