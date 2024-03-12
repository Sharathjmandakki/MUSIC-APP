import axios from 'axios'
import React, { useState } from 'react'

export default function AddSongs() {

  const[name,setName]=useState("")
  const[artist,setArtist]=useState("")
  const[genre,setGenre]=useState("")
  const[link,setLink]=useState("")
  const addSong=async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.post("http://localhost:8080/addsong",{
        name:name,
        artist:artist,
        genre:genre,
        link:link
      });
      alert(response.data)
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
    <form class="max-w-sm mx-auto border p-10 m-20 mt-2" style={{ borderRadius: "10px" }} onSubmit={addSong}>
      <marquee className="text-red-500 mb-10">⚠️ Song name can't modifiable after adding Song</marquee>
        <div class="mb-5">
          <label for="Songname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song name</label>
          <input value={name} type="text" id="Songname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required onChange={e=>setName(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="artist" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist name</label>
          <input value={artist} type="text" id="artist" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="artist name" required onChange={e=>setArtist(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="genre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song genre</label>
          <input value={genre} type="text" id="genre" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Song Genre" required onChange={e=>setGenre(e.target.value)}/>
        </div>
        <div class="mb-5">
          <label for="link" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song link</label>
          <input type="link" value={link} id="link" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Song Link" required onChange={e=>setLink(e.target.value)}/>
        </div>
        <div className='flex justify-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Song</button>
        </div>
      </form>
    </div>
  )
}
