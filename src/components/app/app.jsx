import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import React from 'react';
import style from './app.module.scss';
import { apiUrl } from '../../utils/constants';
import { Modal } from '../modal';


function App () {
    const [data, setData] = React.useState({
        main: [],
        selected: [],
        load: false
    });
    const [modalData, setModalData] = React.useState({
        isShow: false,
        title: null,
        content: null
    });
    React.useEffect(() => {
        setData((prev) => ({
            ...prev,
            load: false
        }))
        fetch(apiUrl)
        .then(e=> {
            if(e.ok) {
                return e.json();
              }
            return Promise.reject(e)
        })
        .then((e)=> {
            setData((prev) => ({
                selected: e.data.slice(0,8),
                main: e.data,
                load: true
            }))
        })
        .catch((e) => {
            console.log(e);
        })
    }, [])
    return (
        <>
            <AppHeader /> 
            {data.load && <main className={`pt-5 ${style.container}`}>
                <BurgerIngredients items={data.main} setModal={setModalData}/> 
                <BurgerConstructor items={data.selected} setModal={setModalData}/> 
            </main>}
            {modalData.isShow && <Modal title={modalData.title && modalData.title} setModal={setModalData}>{modalData.content}</Modal>}
        </>
    )
}
export default App;