import { Button, Input, Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot.module.scss'
import { Link, useHistory } from "react-router-dom";
import {forgotPassword} from '../../services/actions/user'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React, { SyntheticEvent } from 'react'
interface Icounters {
  target: {
      name: string,
      value: string
  }
}
export default function Forgot () {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        email: '',
    })
    const setValueInput = (e:Icounters) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    const submit = (e:SyntheticEvent) => {
        e.preventDefault();
        dispatch(forgotPassword(value));
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
            <h1 className={`text text_type_main-medium ${styles.title}`}> Восстановление пароля</h1>
            <form className={styles.form} onSubmit={submit}>
                <div className={styles.input}> 
                    <Input
                        onChange={setValueInput}
                        type={'text'}
                        value={value.email}
                        name={'email'}
                        size={'default'}
                        placeholder={'Укажите e-mail'}
                    />
                </div>
                <Button type="primary" size="medium">
                    Восстановить
                </Button>
            </form>
          <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль? <Link to={'/login'} className={styles.link}>Войти</Link>
          </span>
        </div>
    )
}