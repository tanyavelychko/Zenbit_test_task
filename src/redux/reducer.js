const defaultState = {
   user: {
       name: '',
       password: ''
   },
   users: [
        {
            username: 'Admin',
            password: '12345'
        }
    ]
};

function root(state = defaultState, action) {
   switch (action.type) {
       case 'SET_USER':
           return {
               ...state,
               user: action.payload
           };
       default:
           return state
   }
}

export default root;