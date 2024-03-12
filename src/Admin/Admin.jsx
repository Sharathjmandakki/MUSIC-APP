import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Settings from '../Helpers/Settings';

export default function Admin() {
    const [tb, setTb] = useState(0);
    const Togglebutton = () => {
        if (tb === 0) {
            setTb(1);
        } else {
            setTb(0)
        }
    }
    const [pg, setPg] = useState(0);
    const Home=()=>{
        setPg(0);
    }
    const Songs=()=>{
        setPg(1);
    }
    const PlayList=()=>{
        setPg(2);
    }
    const View=()=>{
        setPg(3);
    }
    const AddPage=()=>{
        setPg(4);
    }
    const AddAdmin=()=>{
        setPg(5);
    }
    
    return (
        <div style={{ minWidth: "300px" }}>
            <header id='nav'>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" className='flex justify-center'><div className='flex justify-center'><h1 className='font-extrabold mb-2 text-3xl text-center text-cyan-400 font-mono'>BeatBoxify | Admin </h1></div></Link>
                    <button onClick={Togglebutton} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span> 
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class={tb === 0 ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="" onClick={Home} class={pg===0?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="song" onClick={Songs} class={pg===1?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page">Song</Link>
                            </li>
                            <li>
                                <Link to="playlists" onClick={PlayList} class={pg===2?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>PlayLists</Link>
                            </li>
                            <li>
                                <Link to="view" onClick={View} class={pg===3?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Users</Link>
                            </li>
                            <li>
                                <Link to="add" onClick={AddPage} class={pg===4?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Add Songs / PlayList</Link>
                            </li>
                            <li>
                                <Link to="addadmin" onClick={AddAdmin} class={pg===5?"block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500":"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>Add User</Link>
                            </li>
                            
                            <Settings/>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
            <Outlet/>
        </div>
    )
}