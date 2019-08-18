import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    NAME: 'NABEEL UR REHMAN',
    // USER_NUMBER: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.NAME:
            return ({
                ...state,
                NAME: action.payload
            })
        // case ActionTypes.USER_NUMBER:
        //     return ({
        //         ...state,
        //         USER_NUMBER: action.payload
        //     })
        default:
            return state;
    }

}