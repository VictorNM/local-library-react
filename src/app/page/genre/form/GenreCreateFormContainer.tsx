import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import GenreCreateForm from './GenreCreateForm';
import { createGenreAsync } from '../actions';
import { Genre } from '../../../../dto';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        onHide: ownProps.onHide
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onSubmit: (genre: Genre) => dispatch(createGenreAsync(genre))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GenreCreateForm);