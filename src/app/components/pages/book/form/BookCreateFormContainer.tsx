import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import BookCreateForm from './BookCreateForm';
import rootActions from '../../../../modules/rootActions';
import { Book } from '../../../../../dto';
import rootSelector from '../../../../modules/rootSelector';

const bookActions = rootActions.bookActions

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        show: ownProps.show,
        authors: rootSelector.getAllAuthorsWithIdAndName(state),
        genres: rootSelector.getAllGenres(state),
        onHide: ownProps.onHide
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onSubmit: (book: Book) => dispatch(bookActions.createBookAsync(book))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookCreateForm);