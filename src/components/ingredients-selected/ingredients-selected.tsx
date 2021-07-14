import React from 'react'
import style from './ingredients-selected.module.scss'
import {IngredientSelected} from '../ingredient-selected'
import PropTypes from 'prop-types'
import { IngredientsEmpty } from '../ingredients-empty'
import { useDrop } from "react-dnd";
import {useDispatch} from 'react-redux'
import { INGREDIENTS_ADD } from '../../services/actions/ingredients'
import { v4 as uuidv4 } from 'uuid';
import {TIngredient} from '../../types'; 
type TIngredientSelected = {
    items: Array<TIngredient>
}
export default function IngredientsSelected ({items}:TIngredientSelected) {
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
        accept: 'product',
        drop(item:TIngredient) {
            handleDrop(item)
        },
    });
    const handleDrop = (item:TIngredient) => {
        dispatch({
            type: INGREDIENTS_ADD,
            payload: {...item, customId: uuidv4()}
        })
    };
    const [itemBun, itemsOther] = React.useMemo(()=>{
        const itemBun = items.find( (e) => e.type === 'bun');
        const itemsOther = items.filter( (e) => e.type !== 'bun');
        return [itemBun, itemsOther]
    }, [items])
    return (
        <div className={style.container} ref={dropTarget} data-test='selected-items'>
            {itemBun && 
            <IngredientSelected item={{...itemBun, name: itemBun.name + ' (Верх)'}} styleClass={'first'} lock={true}/> 
            || <IngredientsEmpty>Булка</IngredientsEmpty>}
            {itemsOther.length !== 0 &&
            <div className={style.containerScroll}> 
                {itemsOther.map( (e) => (
                    <IngredientSelected item={e} styleClass={'firsts'} key={e.customId} lock={false}/>
                ))}
            </div>
            || <IngredientsEmpty>Начинка</IngredientsEmpty>
            }
            {itemBun && 
            <IngredientSelected item={{...itemBun, name: itemBun.name + ' (низ)'}} styleClass={`last`} lock={true}/> 
            || <IngredientsEmpty>Булка</IngredientsEmpty>}
        </div>
    )
} 
// IngredientsSelected.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         proteins: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         carbohydrates: PropTypes.number.isRequired,
//         calories: PropTypes.number.isRequired,
//         price: PropTypes.number.isRequired,
//         image: PropTypes.string.isRequired,
//         image_mobile: PropTypes.string.isRequired,
//         image_large: PropTypes.string.isRequired,
//         __v: PropTypes.number,
//     })).isRequired,
//     setModal: PropTypes.func
// }
