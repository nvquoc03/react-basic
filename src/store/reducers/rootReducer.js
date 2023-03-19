
const initState = {
    users: [
        { id: 1, name: 'VQ' },
        { id: 2, name: 'LZB' },
        { id: 3, name: '210903' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>Run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100);
            let user = { id: id, name: `random ${id}` };

            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }


}

export default rootReducer;