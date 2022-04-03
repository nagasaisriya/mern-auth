import {React,useState} from 'react';
import './Form.css'
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginuser = async(e) => {
        e.preventDefault();

        const res = await fetch('/signin',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                    email,
                    password
            })
        });

        const data = await res.json();
        if(res.status === 400|| !data){
            window.alert("Invalid credentials");
        }
        else{
            window.alert("Login successfull");
        }
    }
    return(
    <>
    <section className='Login'>
        <div className='container'>
            <center>
            <form method="POST">
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=> setemail(e.target.value)} ></input><br></br>
            <input type="password" name="password" id="password" placeholder='Enter Password' value={password} onChange={(e)=> setpassword(e.target.value)}></input><br></br>
            <input type="submit" name="Login" id="Login" value="Login" placeholder='Login' onClick={loginuser}></input>
            </form>
            </center>
        </div>
    </section>

        
    </>
    )}

export default Login
