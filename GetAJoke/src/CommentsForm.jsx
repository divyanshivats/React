import React, { useState } from 'react'
import { useFormik } from 'formik'

const validate = values => {
  const errors = {};
  if (!values.usernameame) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }


  return errors;
};


function CommentsForm({addComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 4

    // })
    const formik = useFormik({
      initialValues: {
        username: '',
        remarks: '',
        rating: 1,
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        addComment(formik.initialValues)
      },
    })
    // let handleInput = (event) =>{
    //     setFormData( (CurrData) => {
    //         return {...CurrData, [event.target.name]: event.target.value}
    //     })
    // }
    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addComment(formData)
    //     event.preventDefault();

    //     // resetting
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 4
    //     })
        

    // }

  return (
    <div>
        <h4>Leave a comment!</h4>
        <form action="" onSubmit={formik.handleSubmit}>

        <input type="text" 
        placeholder='Username'
        value={formik.values.username}
        onChange={formik.handleChange}
        name='username'
        />
        <br /><br />
        <textarea id=""
        value={formik.values.remarks}
        onChange={formik.handleChange}
        name = "remarks"
        >Remarks</textarea>
        <br /><br />
        <input type="number" 
        placeholder='rating'
        min={1}
        max={5}
        value={formik.values.rating}
        onChange={formik.handleChange}
        name='rating'
        />
        <br /><br />
        <button type='submit'>Add comment</button>

      </form>
    </div>
  )
}

export default CommentsForm
