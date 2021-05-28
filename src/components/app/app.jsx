import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import React from 'react';
import style from './app.module.scss';
import { apiUrl } from '../../utils/constants';
import { Modal } from '../modal';
import { ModalContext } from '../../services/ModalContext';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_ERROR } from '../../services/actions/ingredients'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App () {
    const dispatch = useDispatch();
    const {itemsLoaded, itemsError} = useSelector(store => ({
        itemsLoaded: store.ingredients.itemsLoaded,
        itemsError: store.ingredients.itemsError
    }), shallowEqual)
    const [modalData, setModalData] = React.useState({
        isShow: false,
        title: null,
        content: null
    });
    React.useEffect(() => {
        dispatch({
            type: GET_INGREDIENTS_REQUEST,
        })
        fetch(apiUrl)
        .then(e=> {
            if(e.ok) {
                return e.json();
              }
            return Promise.reject(e)
        })
        .then((e)=> {
            const modData = e.data.map( e => {
                return {
                    ...e,
                    count: 0,
                    selected: false,
                }
            })
            dispatch({
                type: GET_INGREDIENTS_SUCCESS,
                payload: modData,
            })
        })
        .catch((e) => {
            dispatch({
                type: GET_INGREDIENTS_ERROR,
            })
        })
    }, [])
    return (
        <>
            <AppHeader /> 
            <ModalContext.Provider value={setModalData}>
                {itemsLoaded && !itemsError && <main className={`pt-5 ${style.container}`}>
				<DndProvider backend={HTML5Backend}>
                    <BurgerIngredients/> 
                    <BurgerConstructor/>
                </DndProvider>
                </main>}
                {modalData.isShow && <Modal title={modalData.title && modalData.title}>{modalData.content}</Modal>}
            </ModalContext.Provider>
        </>
    )
}
export default App;