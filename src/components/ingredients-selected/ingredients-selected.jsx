import React from 'react'
import style from './ingredients-selected.module.scss'
import {IngredientSelected} from '../ingredient-selected'
import PropTypes from 'prop-types'

export default function IngredientsSelected ({items}) {
    const [itemBun, itemsOther] = React.useMemo(()=>{
        const itemBun = items.find( e => e.type === 'bun');
        const itemsOther = items.filter( e => e.type !== 'bun').reduce((acc,cur) => {
            if(cur.count > 1) {
                const newArr = [...Array(cur.count)].map(() => cur)
                return [...acc, ...newArr]
            } else {
                return [...acc, cur]
            }
            
        },[]);
        return [itemBun, itemsOther]
    }, [items])
    return (
        <div className={style.container}>
            <IngredientSelected item={{...itemBun, name: itemBun.name + ' (Верх)'}} styleClass={'first'}/>
            <div className={style.containerScroll}> 
                {itemsOther.map( (e, k) => (
                    <IngredientSelected item={e} key={k}/>
                ))}
            </div>
             <IngredientSelected item={{...itemBun, name: itemBun.name + ' (низ)'}} styleClass={`last`}/>
        </div>
    )
} 
IngredientsSelected.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number,
    })).isRequired,
    setModal: PropTypes.func
}
