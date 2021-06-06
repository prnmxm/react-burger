import { Button, Input, PasswordInput, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset.module.scss'
import { Link } from "react-router-dom";
import React from 'react'
export default function ResetPassword () {
    const [value, setValue] = React.useState({
        password: '',
        code: '',
    })
    const setValueInput = (e) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo /></div>
            <h1 className={`text text_type_main-medium ${styles.title}`}> Восстановление пароля</h1>
            <form className={styles.form}>
                <div className={styles.input}> 
                    <Input
                        onChange={setValueInput}
                        type={'password'}
                        value={value.password}
                        name={'password'}
                        size={'default'}
                        placeholder={'Введите новый пароль'}
                    />
                </div>
                <div className={styles.input}> 
                    <Input
                        onChange={setValueInput}
                        type={'text'}
                        value={value.code}
                        name={'code'}
                        size={'default'}
                        placeholder={'Введите код из письма'}
                    />
                </div>
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </form>
          <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль? <Link to={'/login'} className={styles.link}>Войти</Link>
          </span>
        </div>
    )
}