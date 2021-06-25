import { OrderFeedItem } from '../orderFeedItem'
import styles from './profileOrders.module.scss'
import {Link, useRouteMatch} from 'react-router-dom'
export default function ProfileOrders () {
    const {path} = useRouteMatch();
    return (
    <div className={styles.orderFeed}>
        {[1,2,3,4,5,6,7,8].map( (e, i) => <OrderFeedItem key={i} path={`${path}/${i}`}/>)}
    </div>
    )
}