import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import axios from 'axios';

export default function PlayLists() {
  const url = "https://img.freepik.com/free-photo/spooky-tree-against-big-moon_1048-2912.jpg"
  const [playlists,setPlaylist]=useState([]);
  const navigate =useNavigate()
  const gotoplaylist=async(playlist)=>{
    navigate("/playlist",{ state: { data: playlist } })
  }
  
  useEffect(()=>{
   const allplaylists=async()=>{
    try{
      const response=await axios.get("http://localhost:8080/playlists")
      setPlaylist(response.data)
    }catch(e){
      console.log(e);
    }
   };
   allplaylists()
  },[])

  return (
    <div className='m-2 p-1 flex flex-wrap justify-center'>
      <div className='w-full flex justify-center m-2'>
        <Search for ="playlist"/>
      </div>      
      {
        playlists.map((playlist) => (
          <button className='text-center m-4 rounded-full' onClick={()=>gotoplaylist(playlist)}>
            {/* if img url is null */}
            <img src={playlist.link || "https://img.freepik.com/free-photo/spooky-tree-against-big-moon_1048-2912.jpg"} className='m-1 rounded-full p-1 min-h-32 max-w-32 bg-transparent hover:bg-white text-center' alt='playlist Image' style={{imageRendering:'pixelated'}} />
            <h3 className='text-xl text-slate-400 '>{playlist.name}</h3>
          </button>
        ))
      }
    </div>
  )
}
