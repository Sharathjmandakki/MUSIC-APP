import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Entry() {
    const [pg, setPg] = useState(0);
    const handel1 = () => {
        setPg(0)
    }
    const handel2 = () => {
        setPg(1)

    }

    return (
        <div style={{ minWidth: "300px" }}>
            <div class="w-full text-center text-3xl mt-5 text-fuchsia">
                <div className='flex justify-center'><h1 className='text-fuchsia-400 font-extrabold mb-5 text-4xl font-serif'>BeatBoxify</h1></div>
                <div class="grid max-w-sm grid-cols-2 gap-2 p-2 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
                    <Link to="login" onClick={handel1} class={pg === 0 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                        <p className='text-fuchsia'>login</p>
                    </Link>
                    <Link to="register" onClick={handel2} class={pg === 1 ? "px-5 p-10 py-1.5 font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg" : "px-5 py-1.5 font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg"}>
                        <p className='text-fuchsia'>Register</p>
                    </Link>
                </div>
            </div>
            <Outlet /> 
            <div id="detailed-pricing" class="flex justify-center">
                <div class="overflow-hidden min-w-max">
                    <div class="grid grid-cols-3 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                        <div class="flex items-center">BeatBoxify</div>
                        <div>User</div>
                        <div>Artist</div>
                    </div>
                    <div class="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">View Songs</div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">view playlists</div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Add songs</div>
                        <div>
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                        <div class="text-gray-500 dark:text-gray-400">Add Playlists</div>
                        <div>
                            <svg class="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </div>
                        <div>
                            <svg class="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
