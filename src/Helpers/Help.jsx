import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Help() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();
  const [reason, setReason] = useState();
  useEffect(() => {
      const user = async () => {
          const res = await axios.get("http://localhost:8080/user")
          setUsername(res.data.username);
          setEmail(res.data.email);
          setId(res.data.id)
      }
      user()
  }, []);

  const Requests=async(e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/addContact",{
      email:email,
      username:username,
      message:reason
    })
    alert(res.data);
    setReason("")
  }

  return (
      <div>
          <div className='overflow-hidden' style={{ minWidth: '300px' }}>
              <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={Requests}>
                  <h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Contact Us</h1>
                  <div id='error' className='min-h-2 text-red-500'></div>
                  <div class="mb-5">
                      <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={email} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light cursor-not-allowed" placeholder="name@gmail.com" disabled />
                  </div>
                  <div class="mb-5">
                      <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" value={username} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light cursor-not-allowed" placeholder="name" disabled />
                  </div>
                  <div class="mb-5">
                      <label htmlFor="writehere" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Leave a message </label>
                      <textarea type="text" value={reason} id="writehere" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light h-24" placeholder='You can request to Delete your account..! You can request to change your Account to artest or viva.  ' onChange={e=>setReason(e.target.value)} />
                  </div>
                  <div className='flex justify-center'>
                      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

