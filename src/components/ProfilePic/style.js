import styled from 'styled-components/native';

const ProfilePic = styled.Image`
  border: transparent;
  border-radius: 50;
  height: ${(props) => (props.height ? props.height : '50px')};
  width: ${(props) => (props.width ? props.width : '50px')};
`;

const S = {
  ProfilePic,
};

export { S };
