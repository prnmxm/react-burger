import { CurrencyIcon, LockIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-selected.module.scss'
import { DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/delete-icon";
export default function IngredientSelected ({item, styleClass}) {
    return (
        <div className={`${style.item} ${styleClass ? style[styleClass] : ''}`}>
            {
                !styleClass &&
                <div className={style.dragdrop}><DragIcon type="primary" /></div>
            }
            <img src={item.image_mobile} className={style.image} alt={item.name}/>
            <p className={`text text_type_main-default ${style.text}`}>{item.name}</p>
            <span className={`text text_type_digits-default ${style.price}`}>{item.price} <CurrencyIcon type="primary" /></span>
            {
                styleClass ?
                <LockIcon type="secondary" />
                :
                <div className={style.remove}><DeleteIcon type="primary" /></div>
            }
        </div>
    )
} 