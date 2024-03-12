import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Search(props) {
  const title = "Search for " + (props.for)
  const [name, setName] = useState();
  const [playlist, SetPlayList] = useState([]);
  const [song, setSong] = useState([]);
  const getResult = (e) => {
    e.preventDefault()
    if ((props.for) === "song") {
      forSong()
    } else {
      forPlaylist()
    }
  }

  const forSong = async () => {
    try {
      const response = await axios.post("http://localhost:8080/searchsong", {
        name: name
      });
      setSong(response.data)
    } catch (e) {
      console.log(e);
      document.getElementById("search").innerHTML = "<h1>Error</h1>"
    }

  }

  const gotoplaylist = async (playlist1) => {
    navigate("/playlist", { state: { data: playlist1 } })
  }
  const navigate = useNavigate()
  const forPlaylist = async () => {
    try {
      const response = await axios.post("http://localhost:8080/getplaylist", {
        name: name
      });
      SetPlayList(response.data)
      console.log(response.data);
    } catch (e) {
      console.log(e);

      document.getElementById("search").innerHTML = "<h1>Error</h1>";
    }
  }

  return (
    <div className='w-full'>
      <form class="max-w-md mx-auto mb-4" onSubmit={getResult}>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={title} required onChange={e => setName(e.target.value)} />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
      <div className='flex flex-wrap justify-center mb-2' id="search">
        {
          (playlist.length != 0) ?
            <button onClick={() => gotoplaylist(playlist)} className='text-center m-4 rounded-full'><img src={playlist.link || "https://img.freepik.com/free-photo/spooky-tree-against-big-moon_1048-2912.jpg"} className='m-1 rounded-full p-1 min-h-32 max-w-32 bg-transparent hover:bg-white text-center' alt='playlist Image' style={{imageRendering:'pixelated'}} /><h3 className='text-xl text-slate-400 '>{playlist.name}</h3></button>: null}{
          (song.length != 0) ? 
          song.map((song)=>(
            <div className='m-2 p-2 rounded-lg bg-blue-900 min-h-36 min-w-40  hover:text-gray-100 cursor-pointer'>
          <div className='flex justify-between mb-2 p-1 gap-3'> 
            <h3 className='text-xl text-red-500 font-mono'> {song.genre}</h3>
            <h3 className='text-xl text-zinc-200 font-mono'>{song.artist}</h3>
          </div>
          <h2 className='text-5xl mt-2 p-2 mb-2 flex justify-center font-serif'> {song.name}</h2>
          <audio src={song.link} controls className='mt-10 mb-5 min-w-40 flex justify-center'></audio>
        </div>
          ))
          : null}
      </div>
      <hr />
    </div>
  )
}
