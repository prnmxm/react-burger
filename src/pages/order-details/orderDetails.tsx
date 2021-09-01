import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import styles from './orderDetails.module.scss';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {useParams} from 'react-router-dom'
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from '../../services/actions/ws';
import { useRouteMatch } from 'react-router-dom';
import { WS_CONNECTION_AUTH_START, WS_CONNECTION_AUTH_CLOSED } from '../../services/actions/ws-auth';
import {conversionDateForCard} from '../../utils/fn'
import { useSelector, useDispatch } from '../../hooks';
import {TIngredient } from '../../types'
export default function OrderDetails () {
    const dispatch = useDispatch();
    const isProfile = !!useRouteMatch("/profile")
    const {itemsWs, itemsWsAuth, ws, wsAuth, itemsIng} = useSelector((store) => ({
        wsAuth: store.ws.wsConnected,
        itemsWsAuth: store.ws.messages,
        ws: store.wsAuth.wsConnected,
        itemsIng: store.ingredients.items,
        itemsWs: store.wsAuth.messages,
    }), shallowEqual)

    useEffect(
        () => {
          if (!wsAuth && !ws) {
            dispatch(isProfile ? { type: WS_CONNECTION_AUTH_START } : { type: WS_CONNECTION_START });
            return () => dispatch(isProfile ? { type: WS_CONNECTION_AUTH_CLOSED } : { type: WS_CONNECTION_CLOSED });
          }
          return () =>{};
        },
        [dispatch, isProfile]
      );
    const {id} = useParams<{ id: string }>();
    const items = isProfile && itemsWs.orders || itemsWsAuth.orders;
    const item = items && items.find( (e:TIngredient) => {
        return e._id === id
    }) || null;
    const itemsDop = item && item.ingredients.map( (e:string) => {
        return itemsIng.find( (a:TIngredient) => a._id === e)
    }) || []
    const price = itemsDop && itemsDop?.reduce( (acc:number, cur: TIngredient) => {
        return acc + (cur?.price || 0)
    },0) || 0
    return (
        item && <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.num}>#{item.number}</div>
            <div className={styles.name}>Black Hole Singularity острый бургер</div>
            <div className={styles.status}>{item.status}</div>
        </div>
        <div>
            <div className={styles.sostav}>Состав</div>
            <div className={styles.items}>
                {itemsDop.map( (e:TIngredient, i:number) => {
                    if(!e) return
                    return (<div className={styles.item} key={i}>
                        <div className={styles.img}><img src={e.image}/></div>
                        <div className={styles.nameitem}>{e.name}</div>
                        <div className={styles.priceitem}>{e.price} <CurrencyIcon type="primary" /> </div>
                    </div>)
                })}
            </div>
        </div>
        <div className={styles.footer}>
                <div className={styles.time}>
                {conversionDateForCard(item.createdAt)}
                </div>
                <div className={styles.price}>
                {price}  <CurrencyIcon type="primary" /> 
                </div>    
        </div>
    </div> || <div></div>
    )
}