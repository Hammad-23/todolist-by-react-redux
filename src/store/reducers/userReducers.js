const reducer = (state = {}, action) => {
     console.log('reducer-->', action)
    switch(action.type) {

        case 'UPDATE_USER': {
           return{...state, user: action.user}
        }

        case 'DELETE_USER': {
           return{...state, user: null}
        }
        default: {
            return {...state}
        }
    }

}

export default reducer