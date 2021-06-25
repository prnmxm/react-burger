import styles from './orderFeedItem.module.scss'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from 'react-redux';
import {Link, useRouteMatch, useLocation} from 'react-router-dom'

export default function OrderFeedItem ({path, id}) {
    const items = [1,2,3,4,5,6,7,8,9,10];
    const [itemsDisplay, itemsOther] = [items.splice(0,5), items];
    const dispatch = useDispatch();
    let left = 0;
    return (
        <Link to={path} className={styles.container}>
            <div className={styles.header}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">
                Сегодня, 16:20 i-GMT+3
                </p>
            </div>
            <div className={styles.body}>
                <p className={`text text_type_main-default ${styles.name}`}>
                    Death Star Starship Main бургер
                </p>
                <div className={styles.items}>
                    {itemsDisplay.map( (e, i, arr) => {
                        left = -((i) * 15);
                        return (
                            <div className={styles.item} key={i} style={{left, zIndex: arr.length - i}}>
                                <img src={'https://via.placeholder.com/150'}/>
                            </div>
                        )
                    })}
                    {itemsOther.length !== 0 && (
                        <div className={`${styles.item}`} style={{left: left - 15}} >
                        <img className={`${styles.item_opac}`} src={'https://via.placeholder.com/150'}/>
                        <div className={`${styles.placeHolder} text text_type_digits-default`}>{itemsOther.length}</div>
                        </div>
                    )}
                </div>
                <p className={`text text_type_digits-default ${styles.price}`}><CurrencyIcon type="primary" /> 480</p>
            </div>
        </Link>
    )
}