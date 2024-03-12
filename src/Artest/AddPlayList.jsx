import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Select from 'react-select'
// import { darkTheme } from 'react-select/themes';
export default function AddPlayList() {  
  const[name,setName]=useState("")
  const[link,setLink]=useState("")
  const[selectedSong,setselectedSong]=useState([])
  const[options,setOptions]=useState([])
  useEffect(()=>{
    const getSongs=async()=>{
      const options1 = []
      try{
        const response=await axios.get("http://localhost:8080/songs")
        options1.push(
          ...response.data.map(item => ({
            value: item, 
            label: item.name
          }))
        );
        setOptions(options1)
      }catch(e){
        alert(options)
        console.log(e);
      }
    }
    getSongs()
  },[])
  
  const addPlayList=async(e)=>{
    let songtoadd=selectedSong.map(item => item.value);;
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:8080/addplaylist",{
        name:name,
        link:link,
        songs:songtoadd
      })
      alert(response.data)
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div>
    <form class="max-w-sm mx-auto border p-10 m-20 mt-2" style={{ borderRadius: "10px" }} onSubmit={addPlayList}>
      <marquee className="text-red-500 mb-10">⚠️ PlayList name and image are not able modifiable after adding PlayList</marquee>
        <div class="mb-5">
          <label for="playlinstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PlayList name</label>
          <input value={name} type="text" id="playlinstname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="PlayList Name" required onChange={e=>setName(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="playlinstlink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PlayList Link image</label>
          <input value={link} type="text" id="playlinstlink" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="PlayList Link image" required onChange={e=>setLink(e.target.value)}/>
        </div>
        <div className='mb-5'>
        <label for="Songs" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Songs</label>
        <Select options={options} isMulti  id='Songs' placeholder="Sellect Songs" required onChange={e=>setselectedSong(e)}/>
        </div>
        
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add PlayList</button>
        </div>
      </form>
    </div>
  )
}
