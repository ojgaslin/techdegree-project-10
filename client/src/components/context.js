import React from 'react';

export const userContext = React.createContext({user: {
    firstName: '',
    lastName: '',
    password: ''
}});
