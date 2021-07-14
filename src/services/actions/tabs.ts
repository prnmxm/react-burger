export const SET_ACTIVE_TAB_SCROLL: 'SET_ACTIVE_TAB' = 'SET_ACTIVE_TAB'; 
export const SET_ACTIVE_TAB_CLICK: 'SET_ACTIVE_TAB_CLICK' = 'SET_ACTIVE_TAB_CLICK'; 
export const ADD_ITEMS_TITLE: 'ADD_ITEMS_TITLE' = 'ADD_ITEMS_TITLE'; 
export const ADD_ITEMS_REF: 'ADD_ITEMS_REF' = 'ADD_ITEMS_REF'
export interface ISET_ACTIVE_TAB_SCROLL {
    readonly type: typeof SET_ACTIVE_TAB_SCROLL;
    readonly payload: string
}
export interface ISET_ACTIVE_TAB_CLICK {
    readonly type: typeof SET_ACTIVE_TAB_CLICK;
    readonly payload: string

}
export interface IADD_ITEMS_TITLE {
    readonly type: typeof ADD_ITEMS_TITLE;
    readonly payload: any;
}
export interface IADD_ITEMS_REF {
    readonly type: typeof ADD_ITEMS_REF;
    readonly payload: any
}
export type TTabsActions =
  | ISET_ACTIVE_TAB_SCROLL
  | ISET_ACTIVE_TAB_CLICK
  | IADD_ITEMS_TITLE
  | IADD_ITEMS_REF;