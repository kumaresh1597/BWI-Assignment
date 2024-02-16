import React,{useState} from 'react';
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Actions/userAction';

const Login = () => {

    const [credentials, setCredentials] = useState({username: "", password: ""})
    let{username,password} = credentials;


    const navigate = useNavigate();
    const dispatch = useDispatch();

    function updateInput(e){
        let x = e.target.name
        setCredentials({...credentials,  [x]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault();

        if(!username || !password){
            alert("Please fill all the feilds");
            return;
        }

        try {
            
            fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            })
            })
            .then(res => res.json())
            .then(res=>(
                dispatch(setUser(res)),
                localStorage.setItem("token",res.token),
                localStorage.setItem("id",res.id),
                setCredentials({username: "", password: ""}),
                alert("User Logged in successully"),
                navigate("/home")
            ));
        } catch (error) {
            alert(error.response.data.message);
        }

    }

  return (
        <div className='log-in-page'>
            <div className='log-in-div'>
            <div className='logo'>
                <p>Sign in to your<br/> account</p>
            </div>
            <div className='enter-data'>
              <form className='input-div' onSubmit={handleSubmit}>
                <input type='text' placeholder='Username' name='username' onChange={updateInput} value={username}/>
                <input type='password' placeholder='Password' name='password' onChange={updateInput} value={password}/>
                <div style={{display:"flex", justifyContent:"center"}}>
                <button className='log-in-btn' type='submit'>LogIn</button> 
                </div>                             
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login