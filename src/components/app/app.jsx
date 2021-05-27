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


function App () {
    const dispatch = useDispatch();
    const {items, itemsLoaded, itemsError} = useSelector(store => ({
        items: store.ingredients.items,
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
            console.log(modData);
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
                    <BurgerIngredients/> 
                    <BurgerConstructor/>
                </main>}
                {modalData.isShow && <Modal title={modalData.title && modalData.title}>{modalData.content}</Modal>}
            </ModalContext.Provider>
        </>
    )
}
export default App;