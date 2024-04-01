import React, { Component } from 'react';
import { View } from 'react-native'
import api from '../services/api'
import { 
    Container, 
    Header, 
    Stars, 
    NamePerfil, 
    AvatarPerfil, 
    BioPerfil, 
    Starred, 
    OwnerAvatar, 
    Info, 
    Title, 
    Author 
} from styled

export default class User extends Component {
    state = {
        starts: [],
    };

    async componentDidMount(){
        const { route } = this.props
        const { user } = route.params
        const response = await api.get(`/users/${user.login}/starred`)
        this.setState({start: response.data})
    }
    render() {

        const { route } = this.params
        const { users } = route.params
        const { stars } = this.state

        return(
            <Container>
                <Header>
                    <AvatarPerfil source={{ uri: user.avatar}} />
                    <NamePerfil>{user.name}</NamePerfil>
                    <BioPerfil>{user.bio}</BioPerfil>
                </Header>
                    <Stars
                    data={stars}
                    keyExtractor={(stars) => String(star.id)}
                    renderItem={ ({item}) => (
                        <Starred>
                            <OwnerAvatar source={{ uri: item.avatar_url}} ></OwnerAvatar>
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Starred>
                    ) }
                    >{}</Stars>
            </Container>
        )


        return <View />
    }
}