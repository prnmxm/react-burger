import {Tab} from '../tab'
import style from './burgerIngredients.module.scss';
import { Ingredients } from '../ingredients'
import { checkCategory } from '../../utils/checkCategory'

function BurgerIngredients ({items}) {
    const sort = items.reduce( (acc, cur) => {
        const data = acc;
        if(!data[cur.type]) {
            data[cur.type] = [];
        } 
        data[cur.type].push(cur)
        return data;
    }, {})
    const sortToArray = [];
    for (const item in sort) {
            const data = {
                category: checkCategory(item) ,
                items: sort[item]
            }
            sortToArray.push(data)
    }

    return (
        <div className={`pt-5 ${style.container}`}>
            <h1 className={`text text_type_main-large ${style.title}`}>Соберите бургер</h1>
            <div className={`mb-5`}>
                <Tab items={sortToArray.map(e => e.category)}/>
            </div>
            <Ingredients items={sortToArray}/>
        </div> 
    )
}

export default BurgerIngredients;