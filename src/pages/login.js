import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from 'react-navigation/native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleLogin = () => {
        if(email === 'xandy' && password === '123') {
            navigation.navigate('main')
        } 
        else{alert('E-mail ou senha inválidos')}
    }

    return (
        <View style={styles.container} >
            <TextInput
                style={styles.input}
                placeHolder= "E-mail"
                value={email}
                onChangeText={setEmail}
                
            />
            <TextInput
                style={styles.input}
                placeHolder= "E-Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin()}>
                <Text style={styles.buttonText} >
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%'
    },
    button: {
        backgroundColor: "#3498db",
        borderRadius: 5,
        padding: 10,
        width: "80%",
        alignItens: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Login;