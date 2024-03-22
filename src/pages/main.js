import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, SubmitButton, List, User, ProfileButton, ProfileButtonText} from './styles'
import api from '../services/api'
import { Keyboard } from "react-native";

import { Container } from './styles'

export default class Main extends Component() {
    state = {
        newUser: '',
         users: [],
    }

    handleAddUser = async () => {
        const { users, newUser} = this.state
        const response = await api.get(`/users/${newUser}`)
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        };

        this.setState({
            users: [...users, data],
            newUser: ''
        })

        Keyboard.dismiss()

        console.log(data)
    }

    render() {
        const { users, newUser } = this.state;
        return (
             <Container>
                <Form>
                    <Input
                    autoCorrect={false}
                    autoCaptalize={true}
                    placeholder="Adicionar Usuário"
                    value={newUser}
                    onChangeText={text => this.setState({newUser: text})}
                    returnKeyType='send'
                    onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton onPress={this.handleAddUser} >
                        <Icon name="add" size={20} color="#fff"/>
                    </SubmitButton>
                </Form>
                <List 
                    showVerticalScrollIndicator={false}
                    data={users}
                    keyExtractor={user => user.login}
                    renderItem={({item})=>(
                        <User>
                            <Avatar source={{uri: item.avatar}} />
                            <Name>{item.name}<Name/>
                            <Bio>{item.bio}</Bio>
                            <ProfileButton onPress={() => {}}
                                <ProfileButtonText> Ver perfil </ProfileButtonText>
                            <ProfileButton />
                        <User/>
                    )
                }
                />
            </Container>
        )
    }
}