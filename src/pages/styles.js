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

export const List = styled.FlatList`
margin-top: 20px;
`;

export const User = styled.View`
alignItems: center;
margin: 0 20px 30px;
`
export const Avatar = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
background: #eee;
`
export const Name = styled.Text`
font-size: 14px;
color: #333;
font-weight: bold;
margin-top: 4px;
text-align: center;
`
export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
font-size: 13px;
line-height: 18px;
color: #999;
margin-top: 5px;
text-align: center;
`
export const ProfileButton = styled(ReactButton)`
margin-top: 10px;
align-self: stretch;
background: #3498db;
justify-content: center;
border-radius: 4px;
align-itens: center;
height: 36px;

`
export const ProfileButtonText = styled.Text`
font-size: 14px;
font-weight: bold;
color: #fff;
text-transform: uppercase;
`
