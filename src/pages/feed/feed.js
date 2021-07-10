import React, { useEffect } from 'react';
import { FeedInfo } from '../../components/feed-info'
import { OrderFeed } from '../../components/orderFeed'
import styles from './feed.module.scss'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../services/actions/ws'
export default function Feed () {
  const {items} = useSelector(store => ({
    items: store.ingredients.items,
}),shallowEqual)
    const dispatch = useDispatch();
    useEffect(
      () => {
        dispatch({ type: WS_CONNECTION_START });
        return () => dispatch({ type: WS_CONNECTION_CLOSED })
      },
      [dispatch]
    );
    return (
        items.length !== 0 ? <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-4">Лента заказов</h1>
           <div className={styles.content}>
                <OrderFeed/>
                <FeedInfo/>
           </div>
        </div> : ''
    )
}