import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './appHeader.module.scss';

function AppHeader () {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <ul className={style.menu}>
                    <li className={style.item}>
                        <a href="#constructor" className={`text text_type_main-default pb-1 pt-1 ${style.button} ${style.active}`}>
                        <BurgerIcon type="primary" /> Конструктор</a>
                        </li>
                    <li className={style.item}>
                        <a href="#lenta" className={`text text_type_main-default pb-1 pt-1 ${style.button}`}>
                        <ListIcon type="secondary" /> Лента заказов</a>
                        </li>
                </ul>
                <div className={style.logo}><Logo /></div>
                <a href="#cabinet" className={`pb-1 pt-1 ${style.button}`}>
                <ProfileIcon type="secondary" /> Личный кабинет</a>
            </div>
        </header>
    )
}

export default AppHeader;