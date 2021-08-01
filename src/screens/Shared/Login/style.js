import styled from 'styled-components/native';

const Login = styled.View`
  flex: 1;
`;

const Logo = styled.Image`
  height: 40px;
  width: 100%;
  margin-bottom: 30px;
`;

const SignIn = styled.View`
  width: 100%;
  height: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SingUp = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const SingUpLink = styled.Text`
  font-family: 'Exo2_700Bold';
  color: #ff0066;
`;

const S = {
  Login,
  Logo,
  SignIn,
  SingUp,
  SingUpLink,
};

export { S };
