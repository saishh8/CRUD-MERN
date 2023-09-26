import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


export default function User() {

  const [users,SetUsers] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(res => SetUsers(res.data))
      .catch(err => console.log(err))
    })

  const handleDelete = id => {
    axios.delete('http://localhost:3001/deleteUser/'+id)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
      .catch(err => console.log(err))
  }
 
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      
      <div className="w-50 bg-white rounded p-3">

      <Link to='/create' className="btn btn-success"> Add +</Link>

        <table className='table'>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {
              users.map((user)=>{

                return <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                  <Link to={`/updates/${user._id}`} className="btn btn-success">Update</Link>
                     <button className="btn btn-danger mx-2" onClick={(e)=> handleDelete(user._id)}>Delete</button>
                    
                    </td>
                </tr>
              })
            }
            

          
          </tbody>

        </table>

      </div>
     
    </div>
  )
}
