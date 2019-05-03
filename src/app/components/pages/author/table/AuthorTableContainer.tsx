import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import AuthorTable from './AuthorTable';
import rootActions from '../../../../modules/rootActions';
import rootSelector from '../../../../modules/rootSelector';

const authorActions = rootActions.authorActions

const mapStateToProps = (state: any) => {
    return {
        authors: rootSelector.getAllAuthors(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, ownProps: any) => {
    return {
        onLoad: () => dispatch(authorActions.getAllAuthorsAsync()),
        onAuthorClick(id: number) {
            dispatch(authorActions.getAuthorDetailAsync(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorTable);