import axios from 'axios'
import {
    GET_ALL_USERS,
    GET_USER_DETAILS
} from '../actions/actionType';




export const getUsers = () => async (dispatch) => {
    const data = await axios.get(`/api/getAllCustomer`)

    dispatch({
        type: GET_ALL_USERS,
        payload: data.data.customers
    })

}


export const getUserDetails = (id) => async (dispatch) => {
    const data = await axios.get(`/api/getCustomer/${id}`)
    dispatch({
        type: GET_USER_DETAILS,
        payload: data.data.customer
    })

}


