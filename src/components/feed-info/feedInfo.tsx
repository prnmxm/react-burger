import styles from './feedInfo.module.scss'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
export default function FeedInfo () {
    const { orders: orders1, total, totalToday } = useSelector((store: any) => store.ws.messages)
    const filterA = (arr: []) => {
        return arr && arr.reduce((acc: any, curr: any) => {
          curr.status === 'done' ? acc['nArr'] = [...acc['nArr'], curr] : acc['dArr'] = [...acc['dArr'], curr]
          return acc;
        }, { dArr: [], nArr: [] }) || {}
      }
    const {dArr:nArr, nArr: dArr} = filterA(orders1)
    return (
        orders1 && dArr && nArr &&  <div className={styles.container}>
       <div className={styles.status}>
           <div>
               <h3  className="text text_type_main-default">Готовы</h3>
               <ul  className={styles.list}>
                   {dArr.splice(0,10).map( (e:any, i:number) => {
                       return <li key={i}>
                           <p className="text text_type_digits-default"  style={{color: '#00CCCC'}}>{e.number}</p>
                       </li>
                   })}
               </ul>
           </div>
           <div>
               <h3>В работе:</h3>
               <ul  className={styles.list}>
                   {nArr.splice(0,10).map( (e:any, i:number) => {
                       return <li key={i}>
                           <p className="text text_type_digits-default">{e.number}</p>
                       </li>
                   })}
               </ul>
           </div>
       </div>
       <div>
           <h3 className="text text_type_main-default">Выполнено за все время:</h3>
           <p className="text text_type_digits-large" 
           style={{textShadow: `0px 0px 16px rgba(51, 51, 255, 0.25),
            0px 0px 8px rgba(51, 51, 255, 0.25),
             0px 4px 32px rgba(51, 51, 255, 0.5)`}}>{total || 0}</p>
       </div>
       <div>
           <h3 className="text text_type_main-default">Выполнено за сегодня:</h3>
           <p className="text text_type_digits-large" 
           style={{textShadow: `0px 0px 16px rgba(51, 51, 255, 0.25),
            0px 0px 8px rgba(51, 51, 255, 0.25),
             0px 4px 32px rgba(51, 51, 255, 0.5)`}}>{totalToday || 0}</p>
       </div>
   </div> || ''
    )
}