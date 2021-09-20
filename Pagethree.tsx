import React, { Component }  from "react";
interface Istate{
meassage:string;
}
interface Ipropse{

}
class Pagethree extends Component<Ipropse,Istate>{
    constructor(props:Ipropse){
        super(props);
        this.state={
          meassage:"page three!!!"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.meassage}</h1>
            </React.Fragment>
        )
    }
};
export default Pagethree;