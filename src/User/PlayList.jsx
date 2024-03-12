import React, { useEffect, useState } from 'react'
import BackToolTip from '../Helpers/BackToolTip'
import { useLocation } from 'react-router-dom';
export default function PlayList(props) {
  const location = useLocation();
  const playlist = location.state?.data;
  const img=playlist.link;
  return (
    <div className='m-2'>
      <div class=" min-w-40 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage:'url('+img+')',backgroundSize:"cover"}}>
        <ul style={{height:'660px',overflow:'auto'}}>
          <li className='flex justify-between mb-2 dark:bg-gray-800 dark:border-gray-700 rounded-full p-4'>
            <BackToolTip title="PlayLists" />
            <h1 class="text-4xl font-extrabold text-fuchsia-100 " style={{fontSize:'30px', fontFamily:'cursive' , letterSpacing:'2px'}}>{playlist.name}</h1>
          </li>
          <hr />
          <div className='mb-2 mt-3 overflow-auto flex flex-wrap justify-center ' style={{ overflow: 'auto' }}>
            {
            playlist.songs.map((song) => (
                <li className='m-2 p-2 rounded-lg bg-blue-900 min-h-28 min-w-28  hover:text-gray-100 cursor-pointe'>
                  <div className='flex justify-between mb-2 p-1'>
                    <h3 className='text-xl text-red-500 font-mono'>{song.genre}</h3>
                    <h3 className='text-xl text-zinc-200 font-mono'>{song.artist}</h3>
                  </div>
                  <h2 className='text-5xl mt-2 p-2 mb-2 flex justify-center font-serif'> {song.name} </h2>
                  <audio src={song.link} controls className='mt-10 mb-5'></audio>
                </li>
              ))
            }
          </div>
        </ul>
      </div>

    </div>
  )
}
