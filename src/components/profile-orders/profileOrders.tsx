import { useEffect } from 'react';
import { OrderFeedItem } from '../orderFeedItem'
import styles from './profileOrders.module.scss'
import { useRouteMatch, useLocation} from 'react-router-dom'
import { shallowEqual } from 'react-redux';
import { WS_CONNECTION_AUTH_START, WS_CONNECTION_AUTH_CLOSED } from '../../services/actions/ws-auth'
import { useSelector, useDispatch } from '../../hooks';
import { TOrder } from '../../types'
export default function ProfileOrders () {
    const {path} = useRouteMatch();
    const location = useLocation();
    const {items, orders: orders1} = useSelector((store) => ({
        items: store.ingredients.items,
        orders: store.wsAuth.messages
    }),shallowEqual)
    const dispatch = useDispatch();
    useEffect(
        () => {
        dispatch({ type: WS_CONNECTION_AUTH_START });
        return () => {
            dispatch({ type: WS_CONNECTION_AUTH_CLOSED });
        }
        },
        [dispatch]
    );

    const {orders} = orders1
    return ( items.length !== 0 && orders && orders.length !== 0 ? 
    <div className={styles.orderFeed}>
        {orders.map( (e:TOrder) => <OrderFeedItem key={e._id} path={{
            pathname: `/profile/orders/${e._id}`,
            state: { background: location }
          }} id={e._id}  data={e}/>)}
    </div> : null
    )
}