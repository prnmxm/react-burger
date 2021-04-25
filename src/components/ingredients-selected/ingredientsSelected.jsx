import style from './ingredientsSelected.module.scss'
import {IngredientSelected} from '../ingredient-selected'
export default function IngredientsSelected ({items}) {
    const itemBun = items.find( e => e.type === 'bun');
    const itemsOther = items.filter( e => e.type !== 'bun');
    return (
        <div className={style.container}>
            <IngredientSelected item={itemBun} styleClass={'first'}/>
            <div className={style.containerScroll}> 
                {itemsOther.map( e => (
                    <IngredientSelected item={e} key={e._id}/>
                ))}
            </div>
             <IngredientSelected item={itemBun} styleClass={`last`}/>
        </div>
    )
} 