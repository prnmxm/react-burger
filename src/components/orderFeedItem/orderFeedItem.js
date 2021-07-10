import styles from './orderFeedItem.module.scss'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {Link, useRouteMatch, useLocation} from 'react-router-dom'
import {conversionDateForCard} from '../../utils/fn'

export default function OrderFeedItem ({path, id, data}) {
    const {items} = useSelector(store => ({
        items: store.ingredients.items,
    }),shallowEqual)
    let left = 0;
    const itemsDop = data.ingredients.map( e => {
        return items.find( a => a._id === e)
    }) || []
    const price = itemsDop?.reduce( (acc, cur) => {
        return acc + (cur?.price || 0)
    },0) || 0
    
    const [itemsDisplay = [], itemsOther = []] = [itemsDop.splice(0,5), itemsDop];
    return (
        <Link to={path} className={styles.container}>
            <div className={styles.header}>
                <p className="text text_type_digits-default">#{data.number}</p>
                <p className="text text_type_main-default text_color_inactive">
                {conversionDateForCard(data.createdAt)}
                </p>
            </div>
            <div className={styles.body}>
                <p className={`text text_type_main-default ${styles.name}`}>
                    {data.name}
                </p>
                <div className={styles.items}>
                    {itemsDisplay.length !== 0 && itemsDisplay.map( (e, i, arr) => {
                        left = -((i) * 15);
                        return (
                            <div className={styles.item} key={i} style={{left, zIndex: arr.length - i}}>
                                {e && <img src={e.image}/>}
                            </div>
                        )
                    })}
                    {itemsOther.length !== 0 ? (
                        <div className={`${styles.item}`} style={{left: left - 15}} >
                        <img className={`${styles.item_opac}`} src={itemsOther[0].image}/>
                        <div className={`${styles.placeHolder} text text_type_digits-default`}>{itemsOther.length}</div>
                        </div>
                    ) : ""}
                </div>
                <p className={`text text_type_digits-default ${styles.price}`}><CurrencyIcon type="primary" /> {price}</p>
            </div>
        </Link>
    )
}