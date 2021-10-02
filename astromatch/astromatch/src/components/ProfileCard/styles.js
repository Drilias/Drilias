import styled from 'styled-components'

export const ProfileContainer = styled.article`
    border-radius: 5px;
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    &::before {
        content: "";
        background: url(${props => props.link}) no-repeat center;
        background-size: cover;
        filter: blur(30px);
        position: absolute;
        width: 100%;
        height: 100%;
    }    
    & > img {
        width: 100%;
        z-index: 2;
    }
`
export const ProfileDetails = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    min-height: 90px;    
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.2);
    color: white;
`
