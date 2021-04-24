import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'
import style from './app.module.scss';

function App () {
    return (
        <>
            <AppHeader /> 
            <main className={style.container}>
                <BurgerConstructor /> 
                <BurgerIngredients /> 
            </main>
        </>
    )
}
export default App;