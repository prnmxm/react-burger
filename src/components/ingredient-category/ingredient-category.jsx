import { IngredientMain } from '../ingredient-main'
import style from './ingredientCategory.module.scss'

export default function IngredientCategory ({items}) {
    return (
        <div className={style.container}>
            {items.map( e => (
                <IngredientMain item={e} key={e._id} />
            ))}
        </div>
    )
} 