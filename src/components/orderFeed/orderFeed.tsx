import { OrderFeedItem } from '../orderFeedItem'
import styles from './orderFeed.module.scss'
import {useRouteMatch} from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
    Link, useLocation,
  } from "react-router-dom";
export default function OrderFeed () {
    const {path} = useRouteMatch();
    const location = useLocation();
    const { orders } = useSelector((store:any) => store.ws.messages, shallowEqual);
    return (
    <div className={styles.orderFeed}>
        {orders && orders.map( (e:any, i:any) => <OrderFeedItem key={e._id}  path={{
            pathname: `/feed/${e._id}`,
            state: { background: location }
          }} id={e._id} data={e}/>) || ''}
    </div>
    )
}