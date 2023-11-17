import {ActionProps, FINISH_ONBOARD} from '../types';

type GlobalActionStateProps = {
  finish_onboard: boolean;
};

const initialstate: GlobalActionStateProps = {
  finish_onboard: false,
};

export default (
  state: GlobalActionStateProps = initialstate,
  action: ActionProps,
) => {
  switch (action.type) {
    case FINISH_ONBOARD:
      return {...state, is_onboard: action.payload};
    default:
      return state;
  }
};
