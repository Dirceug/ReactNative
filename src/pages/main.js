import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import {Keyboard, ActivityIndicator, asyncStorage} from 'react-native';
//import { asyncStorage } from ''

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import { AsyncStorage } from 'react-native';

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
    loading: false
};

async componentDidMount(_, prevState) {
    const users = await AsyncStorage.getItem('users')
    if(users) {
        this.setState({ users: JSON.parse(users)})
    }
}

async componentDidUpdate(_, prevState){
    const { users } = this.state;
    if(prevState.users !== users) {
        await AsyncStorage.setItem('users', JSON.stringify(users))
    }
}

handleAddUser = async () => {
    try{
        const {users, newUser} = this.state;
        loading: true
        const response = await api.get(`/users/${newUser}`);

        if(users.find(user => users.login === response.data.login)) {
          alert("Usuário já inserido")
          this.setState({
            loading: false
          })
          return
        }
        
        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };
        
        this.setState({
            users: [...users, data],
            newUser: '',
            loading: false
        });
        
        Keyboard.dismiss();
    } 
    catch(error) {
        alert("usuário não encontrado!");
        this.setState({
            loading: false
        })
    }
};

  render() {
    const {users, newUser} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({newUser: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton Loading={loading} onPress={this.handleAddUser}>
            {
                loading ? 
                <ActivityIndicator color='#fff' /> :
                <Icon name="add" size={20} color="#fff" /> 
            }
          </SubmitButton>
        </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri: item.avatar}} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => {
                this.props.navigation.navigate('user', { user: item})
              }}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
              <ProfileButton onPress={() => {
                this.setState({
                    users: this.state.users.filter(user => user.login !== item.login)
                })
              }}
              style={{backgroundColor: '#ffc0cd'}}
              >
                <ProfileButtonText>Excluir</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}