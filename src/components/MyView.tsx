import React from 'react';
import styled from 'styled-components/native';

const MyView = (props: any) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default MyView;
