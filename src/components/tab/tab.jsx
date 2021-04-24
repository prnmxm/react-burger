import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './tab.module.scss';

export default function TabSection ({items}) {
    const [current, setCurrent] = React.useState(items[0])
    return (
      <div className={style.container}>
        {items.map( (e, id) => {
            return (
                <Tab key={id} value={e} active={current === e} onClick={setCurrent}>
                    {e}
                </Tab>
            )
        })}
      </div>
    )
  }