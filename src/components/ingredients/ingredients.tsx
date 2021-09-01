
import { IngredientCategory } from '../ingredient-category'
import style from './ingredients.module.scss'
import React, { useRef } from 'react';
import { SET_ACTIVE_TAB_SCROLL } from '../../services/actions/tabs'
import { shallowEqual } from 'react-redux';
import { useSelector, useDispatch } from '../../hooks';
import { TIngredientCat } from '../../types'
type Tingredients = {
    items: Array<TIngredientCat>;
    refsTabs: any;
}

export default function Ingredients ({items, refsTabs}:Tingredients) {
    const dispatch = useDispatch();
    const {tabs} = useSelector((store) => ({
        tabs: store.tabs.tabs,
    }),shallowEqual)
    const containerRef = useRef(document.createElement("div"));
    const scrollView = (el:HTMLElement|null) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        return (
              Math.abs(containerRef.current.getBoundingClientRect().top - rect.top)
        );
      }
    }
    const checkElem = () => {
        const mapCheck = tabs.map( (e:string) => scrollView(document.querySelector(`[data-name=${e}]`))||0);
        const i = mapCheck.indexOf(Math.min(...mapCheck))
        dispatch({
            type: SET_ACTIVE_TAB_SCROLL,
            payload: tabs[i]
        })
    }
    return (
        <div className={style.container} ref={containerRef} onScroll={checkElem}>
           { 
                items.map( (e, i:number) => (
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

