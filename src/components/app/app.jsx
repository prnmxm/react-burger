import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import style from './app.module.scss';
import { data } from '../../utils/data'
function App () {
    return (
        <>
            <AppHeader /> 
            <main className={style.container}>
                <BurgerConstructor/> 
                <BurgerIngredients items={data}/> 
            </main>
        </>
    )
}
export default App;