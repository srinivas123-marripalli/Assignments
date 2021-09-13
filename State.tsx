import React, { Component }  from "react";
interface IState{
    key1:string;
    key2:number;
    key3:boolean;
    key4:string[];
    key5:any;
    key6:any[];
}
interface IProps{}
class State extends Component<IProps,IState>{
    constructor(Props:IProps){
        super(Props);
        this.state={
            key1:"data base",
            key2:100,
            key3:true,
            key4:["hello_one","hello_two","hello_threee","hello_four"],
            key5:{"sub_one":"reactjs","sub_two":"nodejs","sub_three":"angular"},
            key6:[{"p_id":111,"p_name":"p_one","p_cost":10000},
                   {"p_id":222,"p_name":"p_two","p_cost":20000},
                   {"p_id":333,"p_name":"p_three","p_cost":30000},
                   {"p_id":444,"p_name":"p_four","p_cost":40000}]
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.key1}</h1>
                <h1>{this.state.key2}</h1>
                <h1>{JSON.stringify(this.state.key3)}</h1>
            </React.Fragment>
        )
    }
}
export default State;
