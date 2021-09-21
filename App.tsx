import React, { useState } from "react";
function App(){
  const[var_one,setVarone] = useState("hello_1");
  const[var_two,setVartwo] = useState("hello_2");
  const[var_three,setVarthree] = useState("hello_3")

 const changeState = () =>{
 setVarone("welcome_1");
 setVartwo("welcome_2");
 setVarthree("welcome_3");
};
return(
  <React.Fragment>
    <h1>{var_one}</h1>
    <h1>{var_two}</h1>
    <h1>{var_three}</h1>
    <button onClick={changeState}>changeState</button>
  </React.Fragment>
)
}
export default App;