import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreTable from './GenreTable';
import * as actions from '../actions';
import { getAllGenresSelector } from '../selector';

interface OwnProps {
    onGenreClick: () => void
}

const mapStateToProps = (state: any) => {
    return {
        genres: getAllGenresSelector(state.genre)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: OwnProps) => {
    return {
        onLoad: () => dispatch(actions.getAllGenresAsync()),
        onGenreClick(id: number) {
            ownProps.onGenreClick();
            dispatch(actions.getGenreDetailAsync(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreTable);