const questionReducer = (state= { data:null}, action) => {
    switch (action.type) {
        case 'POST_QUESTION':
            //localStorage.setItem('Question', JSON.stringify({ ...action?.data}))
            return { ...state }
        case 'POST_ANSWER':
            return { ...state}
        case 'FETCH_ALL_QUESTIONS':
            return {...state, data: action.payload}

        default:
            return state;
    }
}

export default questionReducer