let user ={
    state:{
        user:[
            {id:1,'name':'jh'},
        ]
    },
    getters:{
        getUser(state){
            return state.user;
        }
    }
};
export default user;