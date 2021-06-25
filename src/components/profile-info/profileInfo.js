import styles from './profileInfo.module.scss'
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React from 'react'
export default function ProfileInfo () {
    const [value, setValue] = React.useState({
        mail: '',
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
            mail: '',
            password: '',
            name: ''
        })
    }
    return (
        <div>
            <form className={styles.form}>
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
                        value={value.mail}
                        name={'mail'}
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
                {value.mail && value.name && value.password && (
                    <>
                    <a className={styles.cancel} onClick={cancel}>Отменить</a>
                    <Button type="primary" size="medium">
                    Зарегистрироваться
                    </Button>
                    </>
                )}
            </form>
        </div>
    )
}