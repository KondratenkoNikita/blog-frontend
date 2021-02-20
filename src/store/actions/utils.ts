import { ActionsUnion, Action, createAction } from 'store/helpers/redux';
import { UtilsActionTypes, PopupNotificationType } from 'store/types/utils';

export const UtilsActions = {
  popupNotification: (payload: PopupNotificationType): Action<
    UtilsActionTypes.POPUP_NOTIFICATION, PopupNotificationType
  > => createAction(UtilsActionTypes.POPUP_NOTIFICATION, payload),
};

export type UtilsActionUnion = ActionsUnion<typeof UtilsActions>;
