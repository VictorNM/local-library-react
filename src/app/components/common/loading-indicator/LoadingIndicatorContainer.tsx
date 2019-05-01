import { connect } from 'react-redux';

import LoadingIndicator from './LoadingIndicator';
import rootSelector from '../../../modules/rootSelector';

const mapStateToProps = (state: any) => ({
    show: rootSelector.getIsLoading(state)
});

export default connect(
    mapStateToProps,
    null
)(LoadingIndicator);