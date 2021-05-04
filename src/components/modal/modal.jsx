const modalRoot = document.querySelector('#modal');
import ReactDOM from 'react-dom';
import style from './modal.module.scss' 
import {ModalOverlay} from '../modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
    return ReactDOM.createPortal(
        (
            <>
                <div className={style.modal + ' p-10'}>
                    <div className={style.header}>
                        {   props.title &&
                            <h3 className={'text text_type_main-large ' + style.title}>{props.title}</h3>
                        }
                        <div className={style.iconClose}><CloseIcon/></div>
                    </div>
                    <div className={style.body}>
                        {props.children}
                    </div>
                </div>
                <ModalOverlay/>
            </>
        ),
        modalRoot
    )
}
export default Modal;