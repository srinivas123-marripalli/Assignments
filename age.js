const{createStore} = require("redux");
 const initialState={
     age:20
 }
 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "AGE_UP":
        return{
            ...state,
            age:state.age + action.value
        }
        case "AGE_DOWN":
            return{
                ...state,
                age:state.age - action.value
            }
            default:
                return state;
    }    
 };




const store=createStore(reducer);
store.subscribe(()=>{
console.log(store.getState())
});
store.dispatch({type:"AGE_UP" , value:2});
store.dispatch({type:"AGE_DOWN" ,value:5});