import * as sessionUtil from "../util/session_util"


export const receiveErrors = errors => ({
    type: "RECEIVE_SESSION_ERRORS",
    errors
});

export const login = (info) => (dispatch) => {
    return sessionUtil.login(info).then(
        user => dispatch({type: "RECEIVE_CURRENT_USER", user}),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}

export const logout = () => (dispatch) => {
    return sessionUtil.logout().then(
        user => dispatch({type: "LOGOUT_CURRENT_USER"}),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}

export const signup = (info) => (dispatch) => {
    return sessionUtil.signup(info).then(
        user => dispatch({type: "RECEIVE_CURRENT_USER", user}),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}

// When called, updates the lastUpdated value in the session state
// Value stands for last time the user's balance value was updated
// UNUSED FUNCTION
// export const update = () => {
//     return {
//         type: "UPDATE_SESSION",
//         time: new Date()
//     }
// }