import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import React from 'react';
import style from './app.module.scss';
import { Modal } from '../modal';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getIngredients } from '../../services/actions/ingredients'
function App () {
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
        <AppHeader /> 
        {itemsLoaded && !itemsError && <main className={`pt-5 ${style.container}`}>
        <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/> 
            <BurgerConstructor/>
        </DndProvider>
        </main>}
        {isOpen && <Modal/>}
        </>
    )
}
export default App;