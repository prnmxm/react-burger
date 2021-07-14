import { Button, Input, PasswordInput, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './login.module.scss'
import { Link, useHistory,useLocation } from "react-router-dom";
import {loginUser} from '../../services/actions/user'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import React from 'react'
export default function Login () {
  const { state } = useLocation<any>();
    const history = useHistory();
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        email: '',
        password: ''
    })
    const hasToken = localStorage.getItem('refreshToken')
    const setValueInput = (e:any) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const path =  state?.from.pathname || '/';
    const submit = (e:any) => {
        e.preventDefault();
        dispatch(loginUser({value, path}));
    }
    if (hasToken) {
      return (<Redirect
        to={ state?.from || '/' }
      />)
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo /></div>
            <h1 className={`text text_type_main-medium ${styles.title}`}>Вход</h1>
            <form className={styles.form} onSubmit={submit}>
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
                    Войти
                </Button>
            </form>
            <span className="text text_type_main-default text_color_inactive">
            Вы — новый пользователь? <Link to={'/register'} className={styles.link}>Зарегистрироваться</Link>
          </span>
          <span className="text text_type_main-default text_color_inactive">
            Забыли пароль? <Link to={'/forgot-password'} className={styles.link}>Восстановить пароль</Link>
          </span>
        </div>
    )
}