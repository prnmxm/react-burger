import { AppHeader } from '../app-header'
import { BurgerConstructor } from '../burger-constructor'
import { BurgerIngredients } from '../burger-ingredients'

function App () {
    return (
        <>
            <AppHeader /> 
            <BurgerConstructor /> 
            <BurgerIngredients /> 
        </>
    )
}
export default App;