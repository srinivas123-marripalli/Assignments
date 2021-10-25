import React,{useState} from "react"
function App(){
const[products,setProducts] = useState([
  {"p_id":111,"p_name":"p_one","p_cost":10000},
  {"p_id":222,"p_name":"p_two","p_cost":20000},
  {"p_id":333,"p_name":"p_three","p_cost":30000},
  {"p_id":444,"p_name":"p_four","p_cost":40000}
]);
const add_products = ()=>{
  setProducts(
  [...products,{"p_id":5555,"p_name":"p_five","p_cost":50000}]
)
};
return(
  <React.Fragment>
    <table border="1" align="center" cellpadding="10" cellspacing="10">
      <thead>
        <tr>
        <th>SNO</th>
        <th>NAME</th>
        <th>COST</th>
        </tr>
      </thead>
      <tbody>
        
        {products.map((element,index)=>(
          <tr key = {index}>
            <td>{element.p_id}</td>
            <td>{element.p_name}</td>
            <td>{element.p_cost}</td>
        </tr>
        ))}
      </tbody>
    </table>
    <button onClick={add_products}>ADD PRODUCTS</button>
  </React.Fragment>
)
};
export default App;