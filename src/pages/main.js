import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, SubmitButton } from './styles'
import api from '../services/api'

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

        this.state({
            users: [...users, data],
            newUser: ''
        })
        console.log(data)
    }

    render() {
        const { users, newUser } = this.state
        return (
            <SafeAreaView>
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
            </Container>
            </SafeAreaView>
        )
    }
}