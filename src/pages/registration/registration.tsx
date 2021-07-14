import { Button, Input, PasswordInput, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './registration.module.scss'
import { Link } from "react-router-dom";
import {registerUser} from '../../services/actions/user'
import React, { SyntheticEvent } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
interface Icounters {
  target: {
      name: string,
      value: string
  }
}
export default function Registration () {
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        name: ''
    })
    const dispatch = useDispatch();
    const setValueInput = (e:Icounters) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submit = (e:SyntheticEvent) => {
        e.preventDefault();
        dispatch(registerUser(value));
    }
    const hasToken = localStorage.getItem('refreshToken')

    if (hasToken) {
      return (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      );
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo /></div>
            <h1 className={`text text_type_main-medium ${styles.title}`}>Регистрация</h1>
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