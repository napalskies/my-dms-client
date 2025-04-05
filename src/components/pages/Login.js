import { useState, useRef, React } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import document_img from '../../images/ov_documents_management.png'

export default function Login()
{
    const navigate = useNavigate();
    
    const[credentials, setCredentials] = useState({
        username: '',
        password: ''});
    
    const handleLogin = async () =>
    {
        const response = await axios.post(
        "http://localhost:5016/api/authentication/login",
        {
            username: credentials.username,
            password: credentials.password
        },
        {
            allowCredentials: true
        }
        )
        .then((response) => 
        {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("refreshToken", response.data.refreshToken);
            navigate("/dashboard");
        })
        .catch(error => 
        {
            setError(error.response?.data);
        });
    }

    
    const[error, setError] = useState("");

    const handleChangeCredentials = (e) =>
    {
        const name = e.target.name;
        const value =  e.target.value;
        setCredentials({ ...credentials, [name] : value }); // face overwrite la username!! si ...credentials e basically an object spread, expanded
    }

    const inputElement = useRef(null);

    const onFocusButtonClick = () => inputElement.current.focus();

    return(
        <div className="login-div">
            <img style={{height:"75px"}} src={document_img} alt ="Document Management System"/>
            <h3>Login</h3>
            <input className="input-login" name="username" value = {credentials.username} onChange={handleChangeCredentials}/>
            <input className="input-login" type="password" name="password" value = {credentials.password} onChange={handleChangeCredentials}/>
            <button className="button-login" onClick={handleLogin}>Login</button>
            {error && <p style={{color:"red"}}>{error}</p>}
            {/* <input ref = {inputElement} />
            <button onClick={onFocusButtonClick}>nn</button> */}
        </div>
    );
}