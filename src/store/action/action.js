
import ActionTypes from '../constant/constant';

//login user 
export function test(user) {
    return dispatch => {
        return new Promise(function (resolve, reject) {

            dispatch({ type: ActionTypes.NAME, payload: 'abc' })

        })
    }
}


