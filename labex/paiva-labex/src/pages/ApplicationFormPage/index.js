import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { ApplicationForm } from './styles';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import { useTripsList } from '../../hooks/useTripsList';


const ApplicationFormPage = () => {
    const trips = useTripsList()
    const [form, onChangeInput] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: ''
    })

    const onSubmitApplication = (e) => {
        e.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trips/${form.trip.id}/apply`, body)
    }

    return (
        <div>
            <PageTitle title={'Candidate-se a viagem'} />
            <ApplicationForm onSubmit={onSubmitApplication}>
                <TextField
                    label={'Nome do candidato'}
                    onChange={onChangeInput}
                    value={form['name']}
                    name={'name'}
                />
                <TextField
                    label={'Idade'} type={'number'}
                    onChange={onChangeInput}
                    value={form['age']}
                    name={'age'}
                />
                <TextField
                    label={'Texto de aplicação'} helperText={'Informe quais são suas qualificações'}
                    onChange={onChangeInput}
                    value={form['applicationText']}
                    name={'applicationText'}
                />
                <TextField
                    label={'Profissão'}
                    onChange={onChangeInput}
                    value={form['profession']}
                    name={'profession'}
                />
                <FormControl>
                    <InputLabel id="select-paises">País</InputLabel>
                    <Select
                        labelId="select-paises"
                        onChange={onChangeInput}
                        value={form['country']}
                        name={'country'}
                    >
                        <MenuItem value={'brasil'}>Brasil</MenuItem>
                        <MenuItem value={'argentina'}>Argentina</MenuItem>
                        <MenuItem value={'chile'}>Chile</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="select-viagens">Viagens</InputLabel>
                    <Select
                        labelId="select-viagens"
                        onChange={onChangeInput}
                        value={form['trip']}
                        name={'trip'}
                    >
                        {trips.map((trip) => {
                            return <MenuItem value={trip}>{trip.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <TextField label={'Viagem'} />
                <Button type={'submit'}>Enviar</Button>
            </ApplicationForm>
        </div>
    )
}

export default ApplicationFormPage;
