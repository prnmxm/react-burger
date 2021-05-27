import style from './ingredients-empty.module.scss';

export default function IngredientsEmpty() {
    return (
        <div className={style.container}>
            <div className={style.place}>Булка</div>
            <div className={style.place}>Начинка</div>
            <div className={style.place}>Булка</div>
        </div>
    )
}