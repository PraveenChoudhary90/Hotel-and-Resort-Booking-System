import { useEffect, useState } from "react";
import Crud from "./Crud";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    let navigate = useNavigate(null)
    let [inputvalue,setValue]=useState(false)
    let [frominput,SetInput]=useState({
        "name":"",
        "email":"",
        "pass":"",
       
    });
    function change(e){
        let{name ,value}=e.target;
        SetInput({
            ...frominput,
            [name]:value
        })
    };
    function fromsubmit(e){
        e.preventDefault()
        console.log(frominput);
         let localStorage_data =JSON.parse(localStorage.getItem("data"));
    console.log(localStorage_data);
    if(frominput.name === ""){
      alert("Please fill the correct full name ");
    }
    else if (frominput.email === ""){
      alert("Please the fill the correct email");
    }
    else if(!(frominput.pass === localStorage_data.pass)){
      alert("Fill right Password ..!! ")
    }
    else{
      setValue(true)
    }
    }
     if(inputvalue){
    return <Crud/>
}
//          if(frominput.name===""||frominput.pass===""||frominput.repass===""){
//             alert("frist fill the details")
//         }
       
//         else{
//         localStorage.setItem("data",JSON.stringify(frominput));
//         setValue(true)
//     }
// }
// if(inputvalue){
//     return 
// }

// useEffect((e)=>{
//     //  e.preventDefault();
//     let localStorage_data =JSON.parse(localStorage.getItem("data"));
//     console.log(localStorage_data);
// });

// if(inputvalue){
//      return <Crud/>
//  }

//     if(frominput.name === ""){
//       alert("Please fill the full name ");
//     }
//     else if (frominput.pass === ""){
//       alert("Please the fill the Password");
//     }
//     else if(!(frominput.repass === localStorage_data.repass)){
//       alert("Fill right Password ..!! ")
//     }
//     else{
//       setValue(true)
//     }
// },[frominput])
//   if(inputvalue){
//     return <Crud/>
// }


   
    return(
        <>
        <div id="from1">
            <h1>Login Here</h1>
            <div id="from2">
        <form action="" onSubmit={fromsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" value={frominput.name} name="name" onChange={change} /><br></br>
             <label htmlFor="">Email</label>
            <input type="text" value={frominput.email} name="email" onChange={change} /><br></br>
             <label htmlFor="">Password</label>
            <input type="text" value={frominput.pass} name="pass" onChange={change} /><br></br>
            <button>Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default Login;