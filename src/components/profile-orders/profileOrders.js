import React, { useEffect } from 'react';
import { OrderFeedItem } from '../orderFeedItem'
import styles from './profileOrders.module.scss'
import {Link, useRouteMatch, useLocation} from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { WS_CONNECTION_AUTH_START, WS_CONNECTION_AUTH_CLOSED } from '../../services/actions/ws-auth'
import { getIngredients } from '../../services/actions/ingredients'

export default function ProfileOrders () {
    const {path} = useRouteMatch();
    const location = useLocation();
    const {items, orders: orders1} = useSelector(store => ({
        items: store.ingredients.items,
        orders: store.wsAuth.messages
    }),shallowEqual)
    const dispatch = useDispatch();
    useEffect(
        () => {
        dispatch({ type: WS_CONNECTION_AUTH_START });
        return () => dispatch({ type: WS_CONNECTION_AUTH_CLOSED })
        },
        [dispatch]
    );
    console.log(123);
    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch])
    const {orders} = orders1
    return ( items.length !== 0 && orders && orders.length !== 0 ? 
    <div className={styles.orderFeed}>
        {orders.map( (e, i) => <OrderFeedItem key={e._id} path={{
            pathname: `/profile/orders/${e._id}`,
            state: { background: location }
          }} id={e}  data={e}/>)}
    </div> : ''
    )
}