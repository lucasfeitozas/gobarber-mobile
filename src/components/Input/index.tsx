import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string; // usado em conjunto com a lib forms da rocketseat
  icon: string;
}
const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />

    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      {...rest}
    />
  </Container>
);

export default Input;
