import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_CHANGESTATUS = createActionName('FETCH_CHANGESTATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchChangeStatus = payload => ({ payload, type: FETCH_CHANGESTATUS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_CHANGESTATUS: {
      return {
        ...statePart,
        data: statePart.data.map((item) =>{
          if(item.id === action.payload.id){
            return action.payload;
          } else{
            return item;
          }
        }
        ),
      };
    }
    default:
      return statePart;
  }
}

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const ChangeStatusFromAPI = (row) => {
  return (dispatch) => {  
    Axios
      .put(`${api.url}/api/${api.tables}/${row.id}`, {status: row.status, order:row.order})
      .then(res => {
        dispatch(fetchChangeStatus(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
  //{"id": "3", "status": "paid", "order": 123},