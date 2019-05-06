import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import BookTable from './BookTable';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';

const bookActions = rootActions.bookActions

const mapStateToProps = (state: any) => {
    return {
        books: rootSelector.getAllBooks(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onLoad: () => dispatch(bookActions.getAllBooksAsync()),
        onBookClick(id: number) {
            dispatch(bookActions.getBookDetailAsync(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookTable);