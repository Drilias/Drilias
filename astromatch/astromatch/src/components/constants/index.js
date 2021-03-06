import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adriana-ferreira'
})

export const getProfiles = () => {
    return api.get(`/person`);
}

export const getMatches = () => {
    return api.get(`/matches`);
}

export const choosePerson = (rId, rChoice) => {
    const body = {
        id: rId,
        choice: rChoice,
    }

    return api.post(`/choose-person`, body)
}

export const clear = () => {
    return api.put(`/clear`);
}
