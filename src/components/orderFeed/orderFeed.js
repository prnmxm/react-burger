import { OrderFeedItem } from '../orderFeedItem'
import styles from './orderFeed.module.scss'
import {useRouteMatch} from 'react-router-dom'
import {
    Link, useLocation,
  } from "react-router-dom";
export default function OrderFeed () {
    const {path} = useRouteMatch();
    const location = useLocation();

    return (
    <div className={styles.orderFeed}>
        {[1,2,3,4,5,6,7,8].map( (e, i) => <OrderFeedItem key={i}  path={{
            pathname: `/feed/${e}`,
            state: { background: location }
          }} id={e}/>)}
    </div>
    )
}