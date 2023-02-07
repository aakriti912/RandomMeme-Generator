import React, { useState } from 'react'

const Form = () => {
    
 const [formValue, setFormValue] = useState({
    email: "",

    password: "",
    repassword:"",
    // subscribe:true,
   
  });

  const handleChange = (event) => {
    const { name, value ,type} = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
    [name]: value,
      };
    });
  };
  const  handlesubmit=(e) =>{
    
    e.preventDefault();
    if(password=== repassword ){

        alert("successful");
    }
    else{
        alert("password didnot matched");
    }



  }

  const { email,  password ,repassword} = formValue;

  return (
    <div>
      <div className="alert"></div>
      <input type="email" name="email" onChange={handleChange} value={email} />
      <br />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

      <br />
      <input
        type="password"
        name="repassword"
        onChange={handleChange}
        value={repassword}
      />
   
      <br></br>
      <button type="submit" onClick={handlesubmit}>
        submit
      </button>
    </div>
  );
}


export default Form;
