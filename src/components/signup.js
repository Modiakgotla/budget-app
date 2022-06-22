import { useNavigate} from  'react-router-dom';
import {Link} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import {auth} from "../config/firebase"
function SignUp() {
 

    const [email,setEmail]=useState('');
    const [password,setPassword] = useState("");
   
    let navigate = useNavigate();
    

    const Register=(()=>{ 

        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            navigate('/home');
        }).catch((error) =>{
            console.log(error);
        })
  
        })

  

return(
<div className="container">

    <h1>Register Account Here</h1>
<input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} /><br></br>


<input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />

<button onClick={Register}>Sign Up </button>

</div>





);
}

export default SignUp;