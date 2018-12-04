import { combineReducers } from 'redux'
import user from './user'
import userID from './userID'
import authUser from './authUser'

//THIS SHOULD BE THE REDUCE COMBINER BUT IT DOESNT WORK

// const rootReducer = combineReducers({
//     user
// })
// const initialState = {
//     name: ""
//   }
  
// const user = (state = {name: "say"}, action) => {
//     switch(action.type) {
//         case 'INCREASE_COUNTER':
//             return { name: "meme" }
//         default: 
//             return state
//     }
// }

// export default user 
export default combineReducers({
    user, 
    userID,
    authUser
})