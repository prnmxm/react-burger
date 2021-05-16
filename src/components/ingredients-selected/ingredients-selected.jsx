import style from './ingredients-selected.module.scss'
import {IngredientSelected} from '../ingredient-selected'
export default function IngredientsSelected ({items}) {
    const itemBun = items.find( e => e.type === 'bun');
    const itemsOther = items.filter( e => e.type !== 'bun');
    return (
        <div className={style.container}>
            <IngredientSelected item={{...itemBun, name: itemBun.name + ' (Верх)'}} styleClass={'first'}/>
            <div className={style.containerScroll}> 
                {itemsOther.map( e => (
                    <IngredientSelected item={e} key={e._id}/>
                ))}
            </div>
             <IngredientSelected item={{...itemBun, name: itemBun.name + ' (низ)'}} styleClass={`last`}/>
        </div>
    )
} 