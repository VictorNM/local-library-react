import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreTable from './GenreTable';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';

const genreActions = rootActions.genreActions

const mapStateToProps = (state: any) => {
    return {
        genres: rootSelector.getAllGenres(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onLoad: () => dispatch(genreActions.getAllGenresAsync()),
        onGenreClick(id: number) {
            dispatch(genreActions.getGenreDetailAsync(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreTable);