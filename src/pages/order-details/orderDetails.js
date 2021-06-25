import styles from './orderDetails.module.scss';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from 'react-router-dom'

export default function OrderDetails () {
    const items = [1,2,3,4,5,6,7,8,9,10];
    const {id} = useParams();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.num}>#{id}</div>
                <div className={styles.name}>Black Hole Singularity острый бургер</div>
                <div className={styles.status}>Выполнен</div>
            </div>
            <div>
                <div className={styles.sostav}>Состав</div>
                <div className={styles.items}>
                    {items.map( (e, i) => {
                        return (<div className={styles.item} key={i}>
                            <div className={styles.img}><img src={'https://via.placeholder.com/150'}/></div>
                            <div className={styles.nameitem}>Флюоресцентная булка R2-D3</div>
                            <div className={styles.priceitem}>2 x 20 <CurrencyIcon type="primary" /> </div>
                        </div>)
                    })}
                </div>
            </div>
            <div className={styles.footer}>
                    <div className={styles.time}>
                    Вчера, 13:50 i-GMT+3
                    </div>
                    <div className={styles.price}>
                    510  <CurrencyIcon type="primary" /> 
                    </div>    
            </div>
        </div>
    )
}