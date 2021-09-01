import { OrderFeedItem } from '../orderFeedItem'
import styles from './orderFeed.module.scss'
import {useRouteMatch} from 'react-router-dom'
import { shallowEqual } from 'react-redux';
import {
    Link, useLocation,
  } from "react-router-dom";
import { useSelector, useDispatch } from '../../hooks';
import {TOrder} from '../../types'
export default function OrderFeed () {
    const location = useLocation();
    const { orders } = useSelector((store) => store.ws.messages, shallowEqual);
    return (
    <div className={styles.orderFeed}>
        {orders && orders.map( (e:TOrder) => <OrderFeedItem key={e._id}  path={{
            pathname: `/feed/${e._id}`,
            state: { background: location }
          }} id={e._id} data={e}/>) || ''}
    </div>
    )
}