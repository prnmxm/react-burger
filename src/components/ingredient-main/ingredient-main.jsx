import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-main.module.scss'

export default function IngredientMain ({item}) {
    return (
        <div className={`${style.block} mb-5`} onClick={e => console.log(item)}>
            <picture className={style.image}>
                <source srcSet={item.image} media="(min-width: 1200px)"/>
                <source srcSet={item.image_large} media="(min-width: 640px)"/>
                <source srcSet={item.image_mobile} media="(max-width: 639px)"/>
                <img src={item.image} alt={item.name}/>
            </picture>
            <Counter count={1} size="small" />
            <span className={`text text_type_digits-small ${style.price}`}>{item.price} <CurrencyIcon type="primary" /></span>
            <p className={`text text_type_main-default ${style.title}`}>{item.name}</p>
        </div>
    )
} 