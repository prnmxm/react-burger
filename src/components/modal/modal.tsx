import ReactDOM from 'react-dom';
import React from 'react';
import style from './modal.module.scss' 
import {ModalOverlay} from '../modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL } from '../../services/actions/modal';
const modalRoot = document.querySelector('#modal');
type TModalProps = {
    children: React.ReactNode;
    close?: () => void;
} 
function Modal(props:TModalProps) {
    const dispatch = useDispatch();
    const {title, content} = useSelector( (store:any) => ({
        title: store.modal.title,
        content: store.modal.content
    }))
    const close = React.useCallback(() => {
        
        dispatch({
            type: CLOSE_MODAL
        })
    },[])
    function clear (e:any) {
        if(e.keyCode === 27 && props.close) {
            props.close()
        }
    }
    React.useEffect(()=> {
        window.addEventListener('keydown', clear)
        return () => {
            window.removeEventListener('keydown', clear)
        }
    })
    return modalRoot ? ReactDOM.createPortal(
        (
            <>
                <div className={style.modal + ' p-10'}>
                    <div className={style.header}>
                        {   title &&
                            <h3 className={'text text_type_main-medium ' + style.title}>{title}</h3>
                        }
                        <div className={style.iconClose} onClick={props.close || close}><CloseIcon type={'secondary'} onClick={()=>{console.log('close')}}/></div>
                    </div>
                    <div className={style.body}>
                        {content || props.children}
                    </div>
                </div>
                <ModalOverlay close={props.close || close}/>
            </>
        ),
        modalRoot
    ): ''
}
export default Modal;