import { UtilsActionUnion } from 'store/actions/utils';
import { UtilsActionTypes } from 'store/types/utils';

import { INITIAL_STATE } from './initialState';
import { UtilsState } from './declarations';

const utilsReducer = (
  state = INITIAL_STATE,
  action: UtilsActionUnion,
): UtilsState => {
  switch (action.type) {
    case UtilsActionTypes.POPUP_NOTIFICATION: {
      return {
        ...state,
        text: '',
      };
    }
    default:
      return state;
  }
};

export default utilsReducer;
