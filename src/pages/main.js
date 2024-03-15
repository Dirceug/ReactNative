import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, SubmitButton } from './styles'

import { Container } from './styles'

export default function Main() {
        return (
            <SafeAreaView>
               <Container>
                <Form>
                    <Input
                    autoCorrect={false}
                    autoCaptalize={true}
                    placeholder="Adicionar Usuário"
                    />
                    <SubmitButton>
                        <Icon name="add" size={20} color="#fff"/>
                    </SubmitButton>
                </Form>
               </Container>
            </SafeAreaView>
        )
    }