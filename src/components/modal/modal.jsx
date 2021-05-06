const modalRoot = document.querySelector('#modal');
import ReactDOM from 'react-dom';
import React from 'react';
import style from './modal.module.scss' 
import {ModalOverlay} from '../modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types'

function Modal(props) {
    function clear (e) {
        if(e.keyCode === 27) {
            props.setModal({
                isShow: false,
                title: null,
                content: null,
            }) 
        }
    }
    const close = React.useCallback(() => {
        props.setModal({
            isShow: false,
            title: null,
            content: null,
        }) 
    },[])
    React.useEffect(()=> {
        window.addEventListener('keydown', clear)
        return () => {
            window.removeEventListener('keydown', clear)
        }
    })
    return ReactDOM.createPortal(
        (
            <>
                <div className={style.modal + ' p-10'}>
                    <div className={style.header}>
                        {   props.title &&
                            <h3 className={'text text_type_main-medium ' + style.title}>{props.title}</h3>
                        }
                        <div className={style.iconClose} onClick={close}><CloseIcon/></div>
                    </div>
                    <div className={style.body}>
                        {props.children}
                    </div>
                </div>
                <ModalOverlay close={close}/>
            </>
        ),
        modalRoot
    )
}
Modal.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
}
export default Modal;