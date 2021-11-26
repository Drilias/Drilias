import React from 'react';
import { MainContainer, PersonalInfo } from './styles';

const UserInfo = ({profile, repositories}) => {    
    return (
        <MainContainer> 
            <PersonalInfo>
                <div>
                    <div>{profile.avatar_url? (
                        <a href={profile.html_url} target="_blank" rel="noreferrer">
                           <img src={profile.avatar_url} alt={profile.avatar_url}/>
                        </a>) : ""}
                    </div>
                </div>  
                <div>
                    <div>{profile.name}</div>
                    <div>{profile.location}</div>  
                    <div>{profile.email}</div>   
                </div>               
            </PersonalInfo>  
            <section>
                <div>{profile.bio}</div>
            </section>                    
            <section>                
                <div>{repositories && repositories.map(repo => (
                    <div key={repo.name}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                           ◽ {repo.name}
                        </a>                                
                    </div>
                ))}</div>
            </section>            
        </MainContainer>
    )
}

export default UserInfo;

