import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        //Aqui implementamos a lógica de login
        console.log(`Email: ${email},Password: ${password} `)
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

    },
    buttonText: {

    }
})

export default Login;