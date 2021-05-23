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
    let newState;
    switch (action.type) {
        case 'init':
            return action.payload;
        case 'add':
            let isBun;
            newState = state.main.map(e => {
                if (e.type === 'bun' && action.payload.type === 'bun' && e._id !== action.payload.id) {
                    return {
                        ...e,
                        selected: false,
                        count: 0
                    }
                } else if (action.payload.id === e._id) {
                    const data = {...e};
                    if (e.type === 'bun') {
                        isBun = true;
                        data.count = 1;
                    }
                    data.count = data.count + 1;
                    data.selected = true;
                    return data;
                }
                return e;
            })
            const checkBun = newState.find(e => e.type === 'bun' && e.selected === true);
            if (!checkBun) {
                newState = newState.map( e => {
                    if(e.type === 'bun' && !isBun) {
                        isBun = true;
                        return {
                            ...e,
                            selected: true,
                            count: 2
                        }
                    }
                    return e;
                })
            }
            return {...state, main: newState};
        case 'remove':
            newState = state.main.map(e => {
                if(e._id === action.payload.id) {
                    const data = {...e};
                    data.count = data.count - 1;
                    if (data.count === 0) {
                        data.selected = false;
                    }
                    return data;
                }
                return e;
            })
            return {...state, main: newState};
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
            const modData = e.data.map( e => {
                return {
                    ...e,
                    count: 0,
                    selected: false,
                }
            })
            setData({
                type: 'init',
                payload: {
                    main: modData,
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
                    <IngredientsContext.Provider value={{data, setData}}>
                        <BurgerIngredients/> 
                        <BurgerConstructor/>
                    </IngredientsContext.Provider>
                </main>}
                {modalData.isShow && <Modal title={modalData.title && modalData.title}>{modalData.content}</Modal>}
            </ModalContext.Provider>
        </>
    )
}
export default App;