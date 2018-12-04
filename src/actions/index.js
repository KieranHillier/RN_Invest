export const changeName = () => ({
    type: 'CHANGE_NAME'
})

export const increaseCounter = () => ({
    type: 'INCREASE_COUNTER'
})

export const storeUserInfo = (user) => ({
    type: 'STORE_USER',
    user
})