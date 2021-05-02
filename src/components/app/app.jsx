import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import React from 'react';
import style from './app.module.scss';
import { apiUrl } from '../../utils/constants';
function App () {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch(apiUrl)
        .then(e=> e.json())
        .then((e)=> setData(e.data))
        .catch((e) => {
            console.log(e);
        })
    }, [])
    const selectedData = data.slice(0,7)

    return (
        <>
            <AppHeader /> 
            {data.length !== 0 && <main className={`pt-5 ${style.container}`}>
                <BurgerIngredients items={data}/> 
                <BurgerConstructor items={selectedData}/> 
            </main>}
        </>
    )
}
export default App;