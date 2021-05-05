import style from './modal-overlay.module.scss' 
function ModalOverlay(props) {
    return (
        <div className={style.overlay} onClick={props.close}></div>
    )
}
export default ModalOverlay;