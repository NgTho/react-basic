const initSate = {
    user: [
        {id:1, name:'Nguyen Van A'},
        {id:2, name:'Nguyen Van B'},
    ]
}
const rootReducer = (state=initSate, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log(action);
            let user = state.user;
            user = user.filter(item => item.id !== action.payload.id);
            //return state;
            return {
                ...state,user
            }
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 10000);
            let new_user = { id: id, name: `random ${id}` };
            return {
                ...state,user:[...state.user,new_user]
            }
        default:
            return state;
    }
}
export default rootReducer;