let news ={
    state:{
        news:[
            {id:1,'title':'hdphp1'},
            {id:2,'title':'hdcms2'},
            {id:3,'title':'hdcms3'},
        ]
    },
    getters:{
        getAllNews(state){
            return state.news;
        }
    }
};
export default news;