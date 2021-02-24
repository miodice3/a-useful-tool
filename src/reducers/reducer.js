
export default function reducer(state={}, action){
    switch (action.type){
        case 'ADD_FORECAST':
            return { ...state, forecasts: action.object.map(block => block)}       
        default:
            return state;
    }
}