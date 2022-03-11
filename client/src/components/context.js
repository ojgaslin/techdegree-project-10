import React from 'react';

export const userContext = React.createContext({user: {
    firstName: '',
    lastName: '',
    password: ''
},
signIn: (user) =>{
    firstName = user.firstName,
    lastName = user.lastName,
    password = user.password
},
signOut: () => {
    firstName = "",
    lastName = "",
    password = ""
}
});
