import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BackToolTip from '../Helpers/BackToolTip';
import axios from 'axios';

export default function EditUser() {
    const location = useLocation();
    const user = location.state?.data;
    const roles = ["User", "Artest", "Admin"]
    const [name, setName] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.roal);
    const [address, setAddress] = useState(user.address);
    const navigate = useNavigate()
    const updateUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/edituser", {
                username: name,
                email: email,
                roal: role,
                address: address
            })
            if (res.data==="updated") {
                alert("Updated")   
            }else{
                document.getElementById("error").innerHTML="somethig went wrong"
            }
            navigate("/admin/view")
        } catch (e) {
            document.getElementById("error").innerHTML="Error"
        }
    }
    return (
        <div className='overflow-hidden' style={{ minWidth: '300px' }}>
            <form class="max-w-sm mx-auto border p-10 m-20 mt-10" style={{ borderRadius: "10px" }} onSubmit={updateUser}>
                <div className='flex justify-center'>
                    <h1 className='text-fuchsia-400 font-extrabold mb-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Edit User</h1>
                </div>
                <div id='error' className='min-h-2 text-red-500'></div>
                <div class="mb-5">
                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input disabled type="email" value={email} id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light cursor-not-allowed" placeholder="name@gmail.com" required onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-5">
                    <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                    <input disabled type="text" value={name} id="username" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light cursor-not-allowed" placeholder="name" required onChange={e => setName(e.target.value)} />
                </div>
                <div class="mb-5">
                    <label htmlFor="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your role</label>
                    <select id="role" value={role} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => { setRole(e.target.value) }}>
                        <option disabled >Role</option>
                        {roles.map((r) => (
                            <option key={r} >{r}</option>
                        ))}
                    </select>
                </div>
                <div class="mb-5">
                    <label htmlFor="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                    <textarea type="text" value={address} id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="India #123" required onChange={e => setAddress(e.target.value)} />
                </div>
                <div className='flex justify-center'>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update User</button>
                </div>
            </form>
        </div>
    )
}
