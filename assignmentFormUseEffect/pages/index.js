import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useState, useEffect} from 'react';

export default function Home() {

  const[username, setUserName] = useState("");
  const[email , setEmail] = useState("");
  const[password, setPassword] = useState("")
  const[confirmePassword , setConfirmePassword] = useState("")
  const[firstName, setFirsName] = useState("");
  const[lastName , setLastName] =useState("");
  const[condition, setCondition] = useState(false);
  let [error, setErrors] =useState([])
  const[formData , setFormData] = useState({
    username: "John Doue", 
    email: "joe@yahoo.com",
    password:  "joe123",
    confirmePassword: "joe123",
    firstName: "John",
    lastName:"Doue",
    condition:true

  });
  const [dataSubmit, setDataSubmit] = useState([])
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(data => setDataSubmit(data))
  }, [])
  function handleSubmit(e){
    e.preventDefault();


    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST", 
      headers: {
        "Content-Type" :"Application/json"
      },
      body: JSON.stringify(formData)
    })
 
  console.log(formData)
  console.log(dataSubmit)
   setFormData(formData)
   dataSubmit.push(formData);
   setFormData({
   userName: "", 
   email: "",
   password:  "",
   confirmePassword: "",
   firstName: "",
   lastName:"",
   condition:false})
 
   
   console.log(error)
   
  
  
  }
  /*
  function handleOnChange(e){
    const name = e.target.name;
    let value= e.target.value;
   

    if (e.target.type === "checkbox"){
      value = e.target.checked;
    }
   
    
    setFormData({
     ...formData, 
     [name]:value
    })
  
  } */
  function handleOnChangeUserName(e){
    
    for(let i =0; i <dataSubmit.length; i++){
     /* if (e.target.value === dataSubmit[i].userName){
       error.push("the name is already exist, try another one")
      e.target.value="";
   
      }
      else {
        setFormData({ ...formData , userName: e.target.value })
      }}*/
      const newUserName = e.target.value;

      // Check if the new username already exists
      const isUserNameExists = dataSubmit.some((data) =>
        data.username === newUserName
      );
    
      if (isUserNameExists) {
        error.push("This username is already in use");
      } else {
        error=[]; // Clear the error if the username is unique
      }
    }
  setFormData({ ...formData , username: e.target.value })}
  function handleOnChangeEmail(e){
    const email = e.target.value;
    /*if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Invalid email format");
    } else {
      setError(""); // Clear the error
    }
    setFormData({ ...formData, email });*/
    setFormData({ ...formData , email: e.target.value })
  }
  function handleOnChangePassword(e){
    const password = e.target.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
  
    if (!passwordRegex.test(password)) {
      error.push("Passwords should have at least 8 characters, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol");
    } else {
      error=[]; // Clear the error
    }
  
 
      setFormData({ ...formData , password: e.target.value })
    
  }
  function handleOnChangeConfirmePassword(e){
  
      const confirmePassword = e.target.value;
      if (confirmePassword !== formData.password) {
        error.push("Passwords do not match");
      } else {
        error=[]; // Clear the error
      
    }
    setFormData({ ...formData , confirmePassword: e.target.value })
  }
  function handleOnChangeFirstName(e){
    setFormData({ ...formData , firstName: e.target.value })
  }
  function handleOnChangeLastName(e){
    setFormData({ ...formData , lastName: e.target.value })
  }
  function handleOnChangeLastName(e){
    setFormData({ ...formData , lastName: e.target.value })
  }
  function handleOnChangeCondition(e){
    

    setFormData({ ...formData , condition: e.target.checked })
  } 
  const listOfSubmissions = dataSubmit.map((data, index) => {
    return (
      <li key={index}>
        {data.username}
      </li>
    );
  });
 
  return <div>  
  <form onSubmit={handleSubmit}>
  <h2>Regestration form</h2>

  <div class="sign-up-info">
  <div> <input type="text" required name="username" pattern="[a-zA-Z]*" value={formData.username} placeholder="user name" onChange={handleOnChangeUserName}/>
 
 </div>
 
  <div><input type="email" required name="email" value={formData.email} onChange={handleOnChangeEmail} placeholder="email address"/></div>
  
  <div><input type="password" required name="password" value={formData.password} onChange={handleOnChangePassword} placeholder="password"/></div>
  
  <div><input type="password" required name="confirmePassword" value={formData.confirmePassword} onChange={handleOnChangeConfirmePassword} placeholder="confirme password"/></div>
  </div>
  <div class="name">
     <input type="text" required name="firstName" value={formData.firstName} onChange={handleOnChangeFirstName} placeholder="first name"/>
  <input type="text" required name="lastName" value={formData.lastName} onChange={handleOnChangeLastName} placeholder="last name"/></div>

  <div class="checkbox" >
    <input name="condition" required value={formData.condition} onChange={handleOnChangeCondition} type="checkbox"/> <label>I agree to the Term of Service</label> </div>
  <div class="button"><button type="submit">Sign Up</button> </div>
  </form>
  {error.length > 0
      ? error.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
     <ul>{
     listOfSubmissions
     }</ul>
      </div>
}
