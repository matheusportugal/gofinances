import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
    Container,
    Header, HighlightCards, Icon, Photo,
    User,
    UserGreeting, UserInfo,
    UserName, UserWrapper
} from './styles';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/16311630?v=4' }} 
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Matheus</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
                
            </Header>
            <HighlightCards>
                <HighlightCard 
                    type='up'
                    title='Entradas' 
                    amount='R$ 17.400,00' 
                    lastTransaction='Última entrada dia 13 de Abril' 
                />  
                <HighlightCard 
                    type='down'
                    title='Saídas' 
                    amount='R$ 1.259,00' 
                    lastTransaction='Última saída dia 03 de Abril' 
                />  
                <HighlightCard 
                    type='total'
                    title='Total' 
                    amount='R$ 16.141,00' 
                    lastTransaction='01 à 16 de Abril' 
                />  

            </HighlightCards>
            
        </Container>
    )
}
