import { FeedInfo } from '../feed-info'
import { OrderFeed } from '../orderFeed'
import styles from './feed.module.scss'
export default function Feed () {
    return (
        <div className={styles.container}>
            <h1 className="text text_type_main-medium mb-4">Лента заказов</h1>
           <div className={styles.content}>
                <OrderFeed/>
                <FeedInfo/>
           </div>
        </div>
    )
}