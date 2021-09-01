import style from './modal-overlay.module.scss' 
type TModalProps = {
    close?: () => void;
} 
function ModalOverlay(props:TModalProps) {
    return (
        <div className={style.overlay} onClick={props.close}></div>
    )
}
export default ModalOverlay;