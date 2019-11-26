export const CHANGE_ACTIVE_MENU_ITEM = 'CHANGE_ACTIVE_MENU_ITEM';

export const changeActiveMenuItem = activeMenuItem => {
  return {
    type: CHANGE_ACTIVE_MENU_ITEM,
    activeMenuItem,
  }
};
