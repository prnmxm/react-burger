import { OrderFeedItem } from '../orderFeedItem'
import styles from './orderFeed.module.scss'
import {Link, useRouteMatch} from 'react-router-dom'
export default function OrderFeed () {
    const {path} = useRouteMatch();
    return (
    <div className={styles.orderFeed}>
        {[1,2,3,4,5,6,7,8].map( (e, i) => <OrderFeedItem key={i}  path={`${path}/123`}/>)}
    </div>
    )
}