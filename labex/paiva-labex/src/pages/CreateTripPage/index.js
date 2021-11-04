import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { CreationTripForm } from './styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import useForm from '../../hooks/useForm';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const CreationTripPage = () => {
    const [form, onChangeInput] = useForm({
        name: '',
        planet: '',
        description: '',
        duration: ''
    })

    useProtectedPage()

    const history = useHistory()

    const [date, setDate] = useState(new Date())

    const onSubmitForm = (e) => {
        e.preventDefault()
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear}`

        const body = {
            name: form.name,
            planet: form.planet,
            date: formattedDate,
            description: form.description,
            durationInDays: form.duration
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trips', body, {
            heders: {
                auth: window.localStorage.getItem('token')
            }
        }).then((res) => {
            history.push('/viagens')
        })
    }

    return (
        <div>
            <PageTitle title={'Criar viagem'} />
            <CreationTripForm onSubmit={onSubmitForm}>
                <TextField label={'Nome'} onChange={onChangeInput}
                    name={'name'} value={form['value']}
                />
                <TextField label={'Planeta'} onChange={onChangeInput}
                    name={'planet'} value={form['planet']}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='dd/MM/yyyy'
                    margin='normal'
                    label="Data"
                    value='date'
                    onChange={date => setDate(date)}
                />
                <TextField label={'Descrição'} onChange={onChangeInput}
                    name={'description'} value={form['description']}
                />
                <TextField label={'Duração em dias'} type={'number'} onChange={onChangeInput}
                    name={'duration'} value={form['duration']}
                />
                <Button type={'submit'}>Criar</Button>
            </CreationTripForm>
        </div>
    )
}

export default CreationTripPage;
