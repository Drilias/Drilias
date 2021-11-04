import React from 'react';
import { LoginForm } from './styles';
import { Button, TextField } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {
    const history = useHistory()
    const [form, onChangeInput] = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = (e) => {
        e.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/login', body)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                history.push('/viagens/lista')
            })
    }

    return (
        <div>
            <PageTitle title={'Login'} />
            <LoginForm onSubmit={onSubmitLogin}>
                <TextField
                    label={'E-mail'} type={'email'}
                    onChange={onChangeInput}
                    value={form['email']}
                    name={'email'}
                />
                <TextField
                    label={'Senha'} type={'password'}
                    onChange={onChangeInput}
                    value={form['password']}
                    name={'password'}
                />
                <Button type={'submit'}>Entrar</Button>
            </LoginForm>
        </div>
    )
}

export default LoginPage;