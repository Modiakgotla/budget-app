import React , {useState} from 'react'
import { useHistory} from  'react-router-dom';
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'

function Login (){

const [email, setEmail] = useState('');
const [password, setPassword] = useState("");

    const btn ={
        width: '150px',
        height: '30px',
        marginTop:"3%"
    }
    
    let history = useHistory();

    const Login=(()=>{ 

        signInWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("/home");
        })
  
        })
    


return (
<div className="container">

    <h1>Login </h1>
<input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/> <br></br>


<input type="password" placeholder="Enter your password"  onChange={(e)=> setPassword(e.target.value)} />

<button style={btn} onClick={Login}>Login </button>


<span>Dont have an account?</span> 
<span>
    
    
<Link to="/sign-up">Create an account</Link>
     </span>
</div>
);


}

export default Login