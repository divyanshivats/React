import React, { useState } from 'react'

function Form() {
    // let [fullName, setFullName] = useState("k")
    // let [userName, setUserName] = useState("user")

    // const handleName = (e) => {
    //     console.log(e.target.value);
    //     setFullName(e.target.value)   
    // }
    // const handleUserName = (e) => {
    //     console.log(e.target.value);
    //     setUserName(e.target.value)   
    // }


    // Creating coomon INput handler
    let [ formData, setFormData] = useState({
      fullName: "",
      username: "",
      Password: ""
    })

    let handleChange = (event) => {
      let fieldName = event.target.name
      console.log(fieldName);
      let fieldValue = event.target.value 
      console.log((fieldValue));
      

      // setFormData(
      //   (currData) => {
      //     currData[fieldName] = fieldValue;
      //     return {...currData};
      //   });   


      // alternative way 
      setFormData(
        (currData) => {
          return {...currData, [fieldName]: fieldValue};
        }); 
    }


    let handleSubmit = (event) => {
      event.preventDefault()
      // perform backend part

      // at last change the input fields back into the empty space

      setFormData({
        fullName: "",
        username: "",
        Password: ""
      })
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullame: </label>
        <input type="text" 
        id="fullname"
        value={formData.fullName} // assosiating react state
        onChange={handleChange}
        placeholder='enter name' 
        name = "fullName" // name must match the state variable
        />
        <button>Submit</button>
        <br /><br />
        
        <label htmlFor="username">User Name: </label>
        <input type="text"  id="username"
        value={formData.username} // assosiating react state
        onChange={handleChange}
        placeholder='enter name'
        name='username'
        />

      <label htmlFor="password">Password: </label>
        <input type="text"  id="password"
        value={formData.Password} // assosiating react state
        onChange={handleChange}
        placeholder='enter password'
        name='Password'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
