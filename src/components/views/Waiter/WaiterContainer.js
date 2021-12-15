import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, ChangeStatusFromAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  setChangestatus: (row) => dispatch(ChangeStatusFromAPI(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);