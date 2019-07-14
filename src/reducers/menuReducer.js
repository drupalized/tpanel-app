import { CHANGE_ACTIVE_MENU_ITEM } from '../actions/menuActions';

/* Left Menu */
const initialState = { value: 'info' };

export const activeMenuItem = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_MENU_ITEM:
      return {
        ...state,
        value: action.activeMenuItem
      }
    default:
      return state
  }
}
