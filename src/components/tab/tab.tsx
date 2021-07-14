import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './tab.module.scss';
import { SET_ACTIVE_TAB_CLICK } from '../../services/actions/tabs'
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from '../../hooks';
import React from 'react';

type TTabSection = {
  items: Array<string|undefined>
}
export default function TabSection ({items}:TTabSection) {
  const dispatch = useDispatch();
  const {active} = useSelector((store) => ({
    active: store.tabs.active,
}),shallowEqual)
  function changeCategory (el:React.ReactNode) {
      dispatch({
        type: SET_ACTIVE_TAB_CLICK,
        payload: el
      })
  }
    return (
      <div className={style.container}>
        {items.map( (e:any, id:number) => {
            return (
                <Tab key={id} value={e} active={active === e} onClick={changeCategory}>
                    {e}
                </Tab>
            )
        })}
      </div>
    )
  }
// TabSection.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.string)
// }
