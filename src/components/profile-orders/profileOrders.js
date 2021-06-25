import { OrderFeedItem } from '../orderFeedItem'
import styles from './profileOrders.module.scss'
import {Link, useRouteMatch, useLocation} from 'react-router-dom'
export default function ProfileOrders () {
    const {path} = useRouteMatch();
    const location = useLocation();
    return (
    <div className={styles.orderFeed}>
        {[1,2,3,4,5,6,7,8].map( (e, i) => <OrderFeedItem key={i} path={{
            pathname: `/profile/orders/${e}`,
            state: { background: location }
          }} id={e}/>)}
    </div>
    )
}