// Dependecies
import React from 'react';
// Styles
import { Container, Content, Posts } from './style';
// Components
import Menu from '../../components/Menu';
import MainHeader from '../../components/MainHeader';
import PostEvent from '../../components/PostEvent';

const Main = () => (
    <Container>
        <Menu />
        <Content>
            <MainHeader subTitle="EVENTOS PRÓXIMOS"/>
            <Posts>
                <PostEvent />
                <PostEvent />
                <PostEvent />
                <PostEvent />
            </Posts>
        </Content>
    </Container>
);

export default Main;