import style from './ingredients-empty.module.scss';
type TIngredientsEmpty = {
    children: React.ReactNode;
}
export default function IngredientsEmpty(props:TIngredientsEmpty) {
    return (
        <div className={style.place}>{props.children}</div>
    )
}