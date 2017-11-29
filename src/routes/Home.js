import React from 'react';
import {StackNavigator} from 'react-navigation'
import { NavBar, ToolBar } from '../components/NavBar';
import transition from '../navigation/transitions';
import Auth from './Auth';
import Other from './Other';
import Navigation from './Navigation';
import Blog from './Blog';
import Chat from './Chat';

const Home = {
    Auth: {
        path: '/',
        name: "Auth",
        screen: Auth
    },
    Other: {
        path:'/other',
        name: "Other",
        screen: Other
    },
    Navigation: {
        path: '/navigation',
        name: "Navigation",
        screen: Navigation
    },
    Blog: {
        path: '/blog',
        name: "Blog",
        screen: Blog
    },
    Chat: {
        path: '/chat',
        name: "Chat",
        screen: Chat
    },

};

export { Home }
