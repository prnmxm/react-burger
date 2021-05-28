import style from './ingredients-empty.module.scss';

export default function IngredientsEmpty(props) {
    return (
        <div className={style.place}>{props.children}</div>
    )
}