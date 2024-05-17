import { useState } from 'react';


function Login() {

  // const[firstName,setFirstName]=useState("");
  // const[lastName,setLastName]=useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event){
  //    setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   setLastName(event.target.value)
  // }

  const [formData,setFormData]=useState( {email:"",password:""} )
  // console.log(formData)
  function changeHandler(event){
    const {name,value,checked,type}=event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]: type==="checkbox" ? checked :value
      }
    });
  }
  
  function submitHandler(event){
    event.preventDefault();
    console.log("Entire Form Data :")
    console.log(formData)
  }
  
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        
        <input 
          type="email" 
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
        />
        <br/>
        <br/>
        <input 
          type='password'
          name='password'
          id='password'
          value={formData.password}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
