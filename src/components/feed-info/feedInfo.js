import styles from './feedInfo.module.scss'
export default function FeedInfo () {
    const items = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className={styles.container}>
            <div className={styles.status}>
                <div>
                    <h3  className="text text_type_main-default">Готовы</h3>
                    <ul  className={styles.list}>
                        {items.map( (e, i) => {
                            return <li key={i}>
                                <p className="text text_type_digits-default"  style={{color: '#00CCCC'}}>{e}</p>
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <h3>В работе:</h3>
                    <ul  className={styles.list}>
                        {items.map( (e, i) => {
                            return <li key={i}>
                                <p className="text text_type_digits-default">{e}</p>
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
                  0px 4px 32px rgba(51, 51, 255, 0.5)`}}>12345</p>
            </div>
            <div>
                <h3 className="text text_type_main-default">Выполнено за сегодня:</h3>
                <p className="text text_type_digits-large" 
                style={{textShadow: `0px 0px 16px rgba(51, 51, 255, 0.25),
                 0px 0px 8px rgba(51, 51, 255, 0.25),
                  0px 4px 32px rgba(51, 51, 255, 0.5)`}}>123</p>
            </div>
        </div>
    )
}