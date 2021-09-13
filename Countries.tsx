import React, { Component }  from "react";
import axios from "axios";
interface Istate{
    response:any[]
}
interface Ipropse{}
class Countries extends Component<Ipropse,Istate>{
    constructor(props:Ipropse){
        super(props);
        this.state={
            response:[]
        }
    }
    componentDidMount (){
        axios.get(`https://restcountries.eu/rest/v2/all`).then((posRes)=>{
            const{data}=posRes;
            this.setState({
                response:data
            })
        },(errRes)=>{
            console.log(errRes);
        })
    }
    render(){
        return(
            <React.Fragment>
             <table>
                 <tr>
                     <th>sno</th>
                     <th>NAME</th>
                     <th>CAPITAL</th>
                     <th>REGION</th>
                     <th>NATIVE NAME</th>
                     <th>FLAG</th>
                     </tr>
                     {this.state.response.map((element:any,index:number)=>{
                      <tr key={index + 1} >
                          <td>{element.name}</td>
                          <td>{element.capital}</td>
                          <td>{element.region}</td>
                          <td>{element.nativeName}</td>
                   <td> <img width="100px" height="50px" src={element.flag}></img> </td>
                     
                    
                 </tr>
     } )}
             </table>
            </React.Fragment>
        )
    }
};
export default Countries;