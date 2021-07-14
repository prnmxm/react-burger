import style from './ingredients-empty.module.scss';

export default function IngredientsEmpty(props:any) {
    return (
        <div className={style.place}>{props.children}</div>
    )
}