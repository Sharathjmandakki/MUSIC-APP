import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BackToolTip from '../Helpers/BackToolTip';
import axios from 'axios';

export default function DeleteUser() {
  const location = useLocation();
  const user = location.state?.data;
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate()
  const deleteUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/deleteuser", {
        username: name,
        email: email
      })
      if (res.data === "deleted") {
        alert("deleted")
      } else {
        document.getElementById("error").innerHTML="somethig went wrong"
      }
      navigate("/admin/view")
    } catch (e) {
      document.getElementById("error").innerHTML="Error"
    }
  }
  return (
    <div className='overflow-hidden' style={{ minWidth: '300px' }}>
      <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={deleteUser}>
        <div className='flex justify-center'><a href='#detailed-pricing' className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Delete User</a></div>
        <div id='error' className='min-h-2 text-red-500'></div>
        <div class="mb-5">
          <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user email</label>
          <input type="email" value={email} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="mb-5">
          <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">user username</label>
          <input type="text" value={name} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required onChange={e => setName(e.target.value)} />
        </div>
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete User</button>
        </div>
      </form>
    </div>
  )
}
