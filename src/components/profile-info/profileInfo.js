import styles from './profileInfo.module.scss'
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react'
import {userDataUpdate} from '../../services/actions/user'
import { useDispatch } from 'react-redux';

export default function ProfileInfo () {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        name: ''
    })
    const setValueInput = (e) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const cancel = (e) => {
        e.preventDefault();
        setValue({
            email: '',
            password: '',
            name: ''
        })
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(userDataUpdate(value));
    }
    return (
        <div>
            <form className={styles.form} onSubmit={submit}>
                <div className={styles.input}> 
                    <Input
                        onChange={setValueInput}
                        type={'text'}
                        placeholder={'Имя'}
                        value={value.name}
                        name={'name'}
                        size={'default'}
                    />
                </div>
                <div className={styles.input}> 
                    <Input
                        onChange={setValueInput}
                        type={'text'}
                        value={value.email}
                        name={'email'}
                        size={'default'}
                        placeholder={'e-mail'}
                    />
                </div>
                <div className={styles.input}> 
                    <PasswordInput
                        onChange={setValueInput}
                        value={value.password}
                        name={'password'}
                        size={'default'}
                        placeholder={'password'}
                    />
                </div>
                {value.email && value.name && value.password && (
                    <>
                    <a className={styles.cancel} onClick={cancel}>Отменить</a>
                    <Button type="primary" size="medium">
                    Обновить
                    </Button>
                    </>
                )}
            </form>
        </div>
    )
}