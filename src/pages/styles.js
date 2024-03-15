import styled from "styled-components/native"
import { ReactButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    backgrondColor: #358358
`

export const Form = styled.View`
    flex-direction: Row;
    padding-botton: 20px;
    border-botton-width: 1px;
    border-color: #eee
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
flex: ';
height: 40px;
background: '#fff';
border-raius: 4px;
padding: 0 14 px;
border: 1px 
`
export const SubmitButton = styled(ReactButton)`
justify-content: center;
align-itens: center;
background: '#3498db';
margin-left: 10px;
padding: 0 12px
`