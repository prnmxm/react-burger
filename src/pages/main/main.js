import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getIngredients } from '../../services/actions/ingredients'
import { BurgerConstructor } from '../../components/burger-constructor'
import { BurgerIngredients } from '../../components/burger-ingredients'
import React from 'react';
import style from './main.module.scss';
export default function Main () {
    const dispatch = useDispatch();
    const {itemsLoaded, itemsError, isOpen} = useSelector(store => ({
        itemsLoaded: store.ingredients.itemsLoaded,
        itemsError: store.ingredients.itemsError,
        isOpen: store.modal.isOpen
    }), shallowEqual)
    React.useEffect(() => {
        dispatch(getIngredients());
    }, [dispatch])
    return (
        <>
        {itemsLoaded && !itemsError && <main className={`pt-5 ${style.container}`}>     
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients/> 
                <BurgerConstructor/>
            </DndProvider>
        </main>}
        </>
    )
}