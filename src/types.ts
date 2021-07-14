export type TIngredient = {
	readonly _id: string;
	readonly name: string;
	readonly type: string;
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
export type TOrder = {
	_id: string;
	createdAt: string;
	ingredients: Array<string>;
	name: string;
	number: number;
	status: string;
	updatedAt: string;
}
