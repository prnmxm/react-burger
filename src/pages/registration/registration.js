import { Button, Input, PasswordInput, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './registration.module.scss'
import { Link } from "react-router-dom";
import React from 'react'
export default function Registration () {
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
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo /></div>
            <h1 className={`text text_type_main-medium ${styles.title}`}>Регистрация</h1>
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
                <Button type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </form>
          <span className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы? <Link to={'/login'} className={styles.link}>Войти</Link>
          </span>
        </div>
    )
}