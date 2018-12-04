const user = (state = "plschange", action) => {
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return "meme" 
        default: 
            return state
    }
}

export default user
