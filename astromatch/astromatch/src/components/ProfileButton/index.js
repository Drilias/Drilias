import React from 'react'
import { BaseButton } from './styles'


export default function ProfileButton({ text, choose }) {
    return (
        <BaseButton onClick={choose}>{text}</BaseButton>
    )
}
