const userID = (state = "AQUIRE.", action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return "SIKE"
        default: 
            return state
    }
}

export default userID