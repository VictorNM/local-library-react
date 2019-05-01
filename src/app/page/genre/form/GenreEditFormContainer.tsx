import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreEditForm from './GenreEditForm';
import { updateGenreAsync, clearCurrentGenre, deleteGenreAsync } from '../actions';
import { getCurrentGenre } from '../selector';
import { Genre } from '../../../../dto';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        initialValues: getCurrentGenre(state.genre)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: any) => {
    return {
        onSubmit: (genre: Genre) => dispatch(updateGenreAsync(genre)),
        onHide() {
            ownProps.onHide();
            dispatch(clearCurrentGenre());
        },
        handleDelete(id: number) {
            dispatch(deleteGenreAsync(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreEditForm);