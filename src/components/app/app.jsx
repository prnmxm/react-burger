import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import style from './app.module.scss';
import { data } from '../../utils/data'
function App () {
    const selectedData = data.slice(0,7)
    return (
        <>
            <AppHeader /> 
            <main className={`pt-5 ${style.container}`}>
                <BurgerIngredients items={data}/> 
                <BurgerConstructor items={selectedData}/> 
            </main>
        </>
    )
}
export default App;