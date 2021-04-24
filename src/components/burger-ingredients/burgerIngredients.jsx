import {Tab} from '../tab'
import style from './burgerIngredients.module.scss';

function BurgerIngredients () {
    return (
        <div className={`pt-5 ${style.container}`}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={['Булки', 'Соусы', 'Начинки']}/>
            </div>
        </div> 
    )
}

export default BurgerIngredients;