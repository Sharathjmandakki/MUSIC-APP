import axios from 'axios';
import React, { useEffect, useRef,useState } from 'react'
import Player from './Player';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
export default function Songs() {
  const [songs,setSongs]=useState([]);
  const [val, setVal] = useState(true)
  const [index, setIndex] = useState(0)
  const navigator =useNavigate() 
  useEffect(()=>{
    const user=async()=>{
      try{
      const res=await axios.get("http://localhost:8080/user")
      if(res.data.paid){
        getSongs()
      }else{
        window.location.href="/pay";
      }
    }catch(e){
      navigator("/entry")
    }
    }
    user()
    const getSongs=async()=>{
      try{
        const response=await axios.get("http://localhost:8080/songs")
        setSongs(response.data)
    }
      catch(e){
        alert(e)
        navigator("/entry")
      }
    }
  },[])
  return (
    <div className='m-2 p-1 flex flex-wrap justify-center'>
      <div className='w-full flex justify-center m-2'>
        <Search for="song"/>
        <div className='flex flex-wrap justify-center' id="song"> </div>
      </div>
      {
        songs.map((song)=>(
          <div className='m-2 p-2 rounded-lg bg-blue-900 min-h-36 min-w-40  hover:text-gray-100 cursor-pointer'>
        <div className='flex justify-between mb-2 p-1 gap-3'> 
          <h3 className='text-xl text-red-500 font-mono'> {song.genre}</h3>
          <h3 className='text-xl text-zinc-200 font-mono'>{song.artist}</h3>
        </div>
        <h2 className='text-5xl mt-2 p-2 mb-2 flex justify-center font-serif'> {song.name}</h2>
        <audio src={song.link} controls className='mt-10 mb-5 min-w-40 flex justify-center'></audio>
      </div>
        ))
      }
    </div>
  )
}