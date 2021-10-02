import React, { useState, useEffect } from 'react'
import { ListContainer } from './styles'
import { ListItem } from './styles'
import * as api from '../constants'

export default function MatchScreen() {
    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api
            .getMatches()
            .then((response) => {
                setMatches(response.data.matches);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(true);
            });
    }, []);

    let output;

    if (isLoading) {
        output = <div>Loading...</div>
    } else {
        output = matches.map((item) => {
            return (
                <ListItem key={item.id}>
                    <div>
                        <img src={item.photo} />
                    </div>
                    <h3>{item.name}</h3>
                </ListItem>
            );
        });
    }


    return (
        <ListContainer>
            {matches.length === 0 ? <div>{"Não tem ninguém aqui :("}</div> : output}
        </ListContainer>
    );
}
