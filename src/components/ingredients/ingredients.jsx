import { IngredientCategory } from '../ingredient-category'
import style from './ingredients.module.scss'
export default function Ingredients ({items}) {
    return (
        <div className={style.container}>
           { 
                items.map( (e, i) => (
                    <div key={i} className={style.category}>
                        <h3 className={`text text_type_main-medium ${style.title} mb-3`}>
                            {e.category}
                        </h3>
                        <IngredientCategory key={e._id} items={e.items}/>
                    </div>
   
                ))
            }
        </div>
    )
} 