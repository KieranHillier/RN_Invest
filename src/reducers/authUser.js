const user = {
    name: "asd",
    userName: "asd",
    email: "asd@email.com",
    id: '',
}

const authUser = (state = user, action) => {
    switch(action.type) {
        case 'STORE_USER':
            return { ...state, 
                name: action.user.fullName,
                userName: action.user.userName,
                email: action.user.email,
                id: action.user.userID
            }
        default: 
            return state
    }
}

export default authUser