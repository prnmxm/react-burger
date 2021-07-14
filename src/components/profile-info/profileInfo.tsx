import styles from './profileInfo.module.scss'
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useEffect} from 'react'
import {userDataUpdate, userData} from '../../services/actions/user'
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileInfo () {
    const dispatch = useDispatch();
    const {email: currentE, name: currentN,userdataSuccess} = useSelector((store:any) => ({
        email: store.user.email,
        name: store.user.name,
        userdataSuccess: store.user.userdataSuccess
    }));
    useEffect(() => {
        dispatch(userData());
      }, []);
;
    const [value, setValue] = React.useState({
        email: '',
        password: '',
        name: ''
    })
    useEffect(() => {
        setValue((state) => {
          return {
            ...state,
            name:currentN,
            email:currentE,
          };
        });
      }, [currentE, currentN])
    const setValueInput = (e:any) => {
      setValue((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
    if (!userdataSuccess) {
        return null
    }
    const cancel = (e:any) => {
        e.preventDefault();
        setValue({
            email: currentE,
            password: '',
            name: currentN
        })
    }
    const submit = (e:any) => {
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