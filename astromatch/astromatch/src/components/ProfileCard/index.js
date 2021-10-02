import React from 'react'
import { ProfileContainer } from './styles'
import { ProfileDetails } from './styles'

export default function ProfileCard(props) {

    return (
        <ProfileContainer link={props.photo}>
            <img src={props.photo} alt="foto do perfil" />
            <ProfileDetails>
                <h2>{props.name}, <span>{props.age}</span></h2>
                <p>{props.bio}</p>
            </ProfileDetails>
        </ProfileContainer>
    )
}