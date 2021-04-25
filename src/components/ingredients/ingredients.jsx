import { IngredientCategory } from '../ingredient-category'
export default function Ingredients ({items}) {
    return (
        <div>
           { 
                items.map( (e, i) => (
                    <div key={i}>
                        <h3 className={`text text_type_main-medium`}>
                            {e.category}
                        </h3>
                        <IngredientCategory key={e._id} items={e.items}/>
                    </div>
   
                ))
            }
        </div>
    )
} 