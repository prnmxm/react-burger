import { IngredientMain } from '../ingredient-main'

export default function IngredientCategory ({items}) {
    return (
        <div>
            {items.map( e => (
                <IngredientMain item={e} key={e._id} />
            ))}
        </div>
    )
} 