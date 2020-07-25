import React from 'react';
import styled from 'styled-components/native';

export default function Settings(){
    return (
        <Container>
            <Header>Settings Page</Header>
        </Container>
    );
}

const Container = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Header = styled.Text `
    font-size: 30px;
`;
