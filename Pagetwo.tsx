import React, { Component }  from "react";
interface Istate{
message:string;
}
interface Ipropse{

}
class pagetwo extends Component<Ipropse,Istate>{
    constructor(props:Ipropse){
        super(props);
        this.state={
            message:"pagetwo!!!"
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.message}</h1>
            </React.Fragment>
        )
    }

};
export default pagetwo;