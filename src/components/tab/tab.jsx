import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './tab.module.scss';
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux';
import { SET_ACTIVE_TAB_CLICK } from '../../services/actions/tabs'
import { useSelector, shallowEqual } from 'react-redux';

export default function TabSection ({items}) {
  const dispatch = useDispatch();
  const {active} = useSelector(store => ({
    active: store.tabs.active,
}),shallowEqual)
  function changeCategory (el) {
      dispatch({
        type: SET_ACTIVE_TAB_CLICK,
        payload: el
      })
  }
    return (
      <div className={style.container}>
        {items.map( (e, id) => {
            return (
                <Tab key={id} value={e} active={active === e} onClick={changeCategory}>
                    {e}
                </Tab>
            )
        })}
      </div>
    )
  }
TabSection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}
