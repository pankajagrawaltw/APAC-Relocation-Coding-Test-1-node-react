import {
    GET_ALL_USERS,
    GET_USER_DETAILS
} from '../actions/actionType';


export const userReducer = (state = { users: [], user: {} }, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }

        case GET_USER_DETAILS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
