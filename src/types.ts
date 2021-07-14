import {store} from './store';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {TIngredientsActions} from './services/actions/ingredients'
export type TIngredient = {
	readonly _id: string;
	readonly name: string;
	readonly type?: string | undefined;
	readonly proteins: number;
	readonly fat: number;
	readonly carbohydrates: number;
	readonly calories: number;
	readonly price: number;
	readonly image: string;
	readonly image_mobile: string;
	readonly image_large: string;
	readonly __v?: number;
	readonly count?: number | null; 
	readonly customId?: number | null; 
}
export type TIngredientCat = {
	readonly items: Array<TIngredient>
	readonly category?: string
}
export type TOrder = {
	_id: string;
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
}
type TApplicationActions = TIngredientsActions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
	ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
