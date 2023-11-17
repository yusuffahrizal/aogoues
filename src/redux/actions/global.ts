import {FINISH_ONBOARD} from '../types';
import {getAsyncStorage, storeAsyncStorage} from '../../utils';
import {ASYNC_KEY} from '../../constants';
import {isEmpty, isString} from 'lodash';
import {Dispatch} from 'redux';

const setIsOnboard = (payload: boolean) => ({
  type: FINISH_ONBOARD,
  payload,
});

const onBoardSuccess = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setIsOnboard(true));
    storeAsyncStorage(ASYNC_KEY.IS_ONBOARD, '1', false);
  };
};

const getOnboardStatus = () => {
  return async (dispatch: Dispatch) => {
    const data = await getAsyncStorage(ASYNC_KEY.IS_ONBOARD);

    if (!isEmpty(data) && isString(data)) {
      dispatch(setIsOnboard(data === '1'));
    }
  };
};

export default {
  setIsOnboard,
  onBoardSuccess,
  getOnboardStatus,
};
