import styled from 'styled-components/native';

const ProfilePic = styled.Image`
  border-width: 1px;
  border-color: #CACACA;
  border-radius: 50px;
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.height}px`};
  margin: 0;
  padding: 0;

`;

const S = {
  ProfilePic,
};

export { S };
