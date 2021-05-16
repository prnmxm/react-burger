import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './tab.module.scss';
import PropTypes from 'prop-types'

export default function TabSection ({items}) {
  const [current, setCurrent] = React.useState(items[0])
  function changeCategory (el) {
      setCurrent(el)
      // :D
      document.querySelector(`[data-name=${el}]`).scrollIntoView({block: "start", behavior: "smooth"});
  }
    return (
      <div className={style.container}>
        {items.map( (e, id) => {
            return (
                <Tab key={id} value={e} active={current === e} onClick={changeCategory}>
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
