import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import React, { useReducer, useContext } from 'react';
import style from './app.module.scss';
import { apiUrl } from '../../utils/constants';
import { Modal } from '../modal';
import { IngredientsContext } from '../../services/IngredientsContext';
import { ModalContext } from '../../services/ModalContext';

const ingredientsReducer = (state, action) => {
    switch (action.type) {
        case 'init':
            return action.payload;
        case 'add':
            return action.payload;
        case 'del':
            return action.payload;
    }
}

function App () {
    const [data, setData] = useReducer(ingredientsReducer, {
        main: [],
        load: false
    });
    const [modalData, setModalData] = React.useState({
        isShow: false,
        title: null,
        content: null
    });
    React.useEffect(() => {
        fetch(apiUrl)
        .then(e=> {
            if(e.ok) {
                return e.json();
              }
            return Promise.reject(e)
        })
        .then((e)=> {
            setData({
                type: 'init',
                payload: {
                    main: e.data,
                    selected: e.data.slice(0,8),
                    load: true
                }
            })

        })
        .catch((e) => {
            console.log(e);
        })
    }, [])

    return (
        <>
            <AppHeader /> 
            <ModalContext.Provider value={setModalData}>
                {data.load && <main className={`pt-5 ${style.container}`}>
                    <IngredientsContext.Provider value={data}>
                        <BurgerIngredients setModal={setModalData}/> 
                        <BurgerConstructor setModal={setModalData}/> 
                    </IngredientsContext.Provider>
                </main>}
                {modalData.isShow && <Modal title={modalData.title && modalData.title}>{modalData.content}</Modal>}
            </ModalContext.Provider>
        </>
    )
}
export default App;