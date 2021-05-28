import { IngredientCategory } from '../ingredient-category'
import style from './ingredients.module.scss'
import PropTypes from 'prop-types'
import { useRef } from 'react';
import { SET_ACTIVE_TAB_SCROLL } from '../../services/actions/index'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';


export default function Ingredients ({items}) {
    const dispatch = useDispatch();
    const {tabs, disable} = useSelector(store => ({
        tabs: store.tabs.tabs,
        disable: store.tabs.disable,
    }),shallowEqual)
    const containerRef = useRef(null);
    const scrollView = (el) => {
      const rect = el.getBoundingClientRect();
      return (
            Math.abs(containerRef.current.getBoundingClientRect().top - rect.top)
      );
    }
    const checkElem = () => {
        if (!disable) {
            const mapCheck = tabs.map( e => scrollView(document.querySelector(`[data-name=${e}]`)));
            const i = mapCheck.indexOf(Math.min(...mapCheck))
            dispatch({
                type: SET_ACTIVE_TAB_SCROLL,
                payload: tabs[i]
            })
        }
    }
    return (
        <div className={style.container} ref={containerRef} onScroll={checkElem}>
           { 
                items.map( (e, i) => (
                    <div key={i} className={style.category} data-name={e.category}>
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
Ingredients.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string,
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
            }).isRequired) 
        })
    )}
