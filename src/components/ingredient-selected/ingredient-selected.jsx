import React, {useContext, useRef} from 'react'
import { CurrencyIcon, LockIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-selected.module.scss'
import { DeleteIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/delete-icon";
import PropTypes from 'prop-types'
import {useDispatch, useSelector, useStore} from 'react-redux'
import { INGREDIENTS_REMOVE, INGREDIENTS_SELECTED_UPDATE } from '../../services/actions/ingredients'
import { useDrag, useDrop } from 'react-dnd';

export default function IngredientSelected ({item, styleClass, lock}) {
    const dispatch = useDispatch();
    const {selected} = useSelector(store => ({
        selected: store.ingredients.selected
    }));
    const ref = useRef(null);
    const index = selected.findIndex(e => e.customId === item.customId);
    const [, drop] = useDrop({
        accept: 'ingMain',
        hover(e) {
          if (!ref.current) {
            return;
          }
          const dragIndex = e.index;
          const hoverIndex = index;
          if (dragIndex === hoverIndex) {
            return;
          }
          dispatch({
            type: INGREDIENTS_SELECTED_UPDATE,
            payload: {
                from: hoverIndex,
                to: dragIndex
            }
          });
    
          e.index = hoverIndex;
        },
      });
      const [{ isDrag }, drag] = useDrag({
        type: 'ingMain',
        item: {
          index: index
        },
        collect: monitor => ({
          isDrag: monitor.isDragging()
        })
      });
    
    const remove = () => {
        dispatch({
            type: INGREDIENTS_REMOVE,
            payload: item
        })
    }
    const opacity = isDrag ? 0 : 1;
    drag(drop(ref));
    return (
        <div className={`${style.item} ${styleClass ? style[styleClass] : ''}`}  {...(!lock && {ref:ref})}style={{opacity}} data-type={item.type === 'bun' && 'bun' || 'main'} data-test='product'>
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
                <div className={style.remove} onClick={remove} data-test="remove"><DeleteIcon type="primary" /></div>
            }
        </div>
    )
} 
IngredientSelected.propTypes = {
    item: PropTypes.shape({
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
    }).isRequired,
    styleClass: PropTypes.string
}
