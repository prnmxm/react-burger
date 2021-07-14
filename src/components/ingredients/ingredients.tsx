
import { IngredientCategory } from '../ingredient-category'
import style from './ingredients.module.scss'
import PropTypes from 'prop-types'
import { useRef } from 'react';
import { SET_ACTIVE_TAB_SCROLL } from '../../services/actions/tabs'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
type Tingredient = {
    items:any;
    refsTabs: any;
}

export default function Ingredients ({items, refsTabs}:Tingredient) {
    const dispatch = useDispatch();
    const {tabs} = useSelector((store:any) => ({
        tabs: store.tabs.tabs,
    }),shallowEqual)
    const containerRef = useRef(document.createElement("div"));
    const scrollView = (el:any) => {
      const rect = el.getBoundingClientRect();
      return (
            Math.abs(containerRef.current.getBoundingClientRect().top - rect.top)
      );
    }
    const checkElem = () => {
        const mapCheck = tabs.map( (e:any) => scrollView(document.querySelector(`[data-name=${e}]`)));
        const i = mapCheck.indexOf(Math.min(...mapCheck))
        dispatch({
            type: SET_ACTIVE_TAB_SCROLL,
            payload: tabs[i]
        })
    }
    return (
        <div className={style.container} ref={containerRef} onScroll={checkElem}>
           { 
                items.map( (e:any, i:any) => (
                    <div key={i} className={style.category} data-name={e.category} ref={el => refsTabs(el, e.category)}>
                        <h3 className={`text text_type_main-medium ${style.title} mb-3`}>
                            {e.category}
                        </h3>
                        <IngredientCategory items={e.items}/>
                    </div>
   
                ))
            }
        </div>
    )
} 
// Ingredients.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             category: PropTypes.string,
//             items: PropTypes.arrayOf(PropTypes.shape({
//                 _id: PropTypes.string.isRequired,
//                 name: PropTypes.string.isRequired,
//                 type: PropTypes.string.isRequired,
//                 proteins: PropTypes.number.isRequired,
//                 fat: PropTypes.number.isRequired,
//                 carbohydrates: PropTypes.number.isRequired,
//                 calories: PropTypes.number.isRequired,
//                 price: PropTypes.number.isRequired,
//                 image: PropTypes.string.isRequired,
//                 image_mobile: PropTypes.string.isRequired,
//                 image_large: PropTypes.string.isRequired,
//                 __v: PropTypes.number,
//             }).isRequired) 
//         })
//     )}
