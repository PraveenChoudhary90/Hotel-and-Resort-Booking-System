import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
const Singup=()=>{
    let[datainput,setData]=useState(false)
    let[frominput,SetInput]= useState({
        "name":"",
        "email":"",
        "age":"",
        "phone":"",
        "pass":"",
        "repass":""
    });

    function change(e){
        let{name,value}= e.target;
        SetInput({
            ...frominput,
            [name]:value
        })
    };
    function fromsubmit(e){
        e.preventDefault();
        console.log(frominput);
        if(frominput.name===""||frominput.email===""||frominput.age===""||frominput.phone===""||frominput.pass==""||frominput.repass===""){
            alert("all fildes are required");
        }
        else{
        localStorage.setItem("data",JSON.stringify(frominput))
        setData(true)
        }
    }
    if(datainput){
        return <Login/>
    }
    return(
        <>
        <div id="sing">
            <h1>Singup Here</h1>

        <div id="singup">
        <form action="" id="singup1" onSubmit={fromsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={frominput.name} onChange={change} /><br></br>
            <label htmlFor="">Email</label>
            <input type="text" name="email" value={frominput.email} onChange={change} /><br></br>
            <label htmlFor="">Age</label>
            <input type="text" name="age" value={frominput.age} onChange={change} /><br></br>
            <label htmlFor="">Phone</label>
            <input type="text" name="phone" value={frominput.phone} onChange={change} /><br></br>
            <label htmlFor="">Password</label>
            <input type="text" name="pass" value={frominput.pass} onChange={change} /><br></br>
            <label htmlFor="">Re-Password</label>
            <input type="text" name="repass" value={frominput.repass} onChange={change} /><br></br>
            <button>submit</button>
            <h5>Already Have An Account <button><Link style={{textDecoration:"none"}} to={"/login"}>login</Link></button></h5>
        </form>
        </div>
        </div>
        </>
    )
}
export default Singup;