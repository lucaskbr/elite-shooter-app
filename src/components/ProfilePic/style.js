import styled from 'styled-components/native';

const ProfilePic = styled.Image`
  border: transparent;
  border-radius: 50;
  height: ${(props) => (props.height ? props.height : '100px')};
  width: ${(props) => (props.width ? props.width : '100px')};
`;

const S = {
  ProfilePic,
};

export { S };
