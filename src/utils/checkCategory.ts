import { category } from './constants';
export function checkCategory (text: string) {
    const item = category.find((e)=> e.name === text);
    if (item) {
        return item.title;
    }
    throw new Error('No category')
} 