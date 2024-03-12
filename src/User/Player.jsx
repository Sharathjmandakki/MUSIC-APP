import React, { useEffect, useRef, useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";

export default function Player (props) {
    const arr =props.songs;
    const index =props.index;
    const [btn, setbtn] = useState(false)
    const [cur,setCur]=useState(0)
    const[audio,setAudio]=useState(null)
    const[currentTime,setCurrentTime]=useState(0)
    const[duration,setDuration]=useState(0)
    const audioRef = useRef(null);

    useEffect(()=>{
        const check=()=>{
            (index!=null||index!=undefined)?setCur(index):setCur(0)
        }
        check()
    },[])

    setInterval(() => {
        const _duration = Math.floor(audioRef?.current?.duration);
        const _elapsed = Math.floor(audioRef?.current?.currentTime);
        setDuration(_duration);
        setCurrentTime(_elapsed);
        // if(currentTime === duration){
        //     setbtn(false)
        // }
    }, 100);

    function formatTime(time) {
        if(time && !isNaN(time)){
            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

            return `${minutes}:${seconds}`;
        }
        return '00:00';
    }


    const initializeAudio = (src) => {
        const audio = new Audio(src);
        audio.volume = 0.1;
        audioRef.current = audio;
        setAudio(audio)
        // setInterval(0)
    };
    const change = () => {
        setbtn(!btn)
        if (arr.length === 0 || cur < 0 || cur >= arr.length) {
            return;
        }
        if (!audioRef.current) {
            // setCur(0);
            initializeAudio(arr[cur].link);
        }

        const audio = audioRef.current;
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    const nextsong = () => {
        if (cur < arr.length - 1) {
            setCur(cur + 1)
        }
        if (cur == arr.length - 1) {
            setCur(cur)
        }
        if (audio != null) {
            audio.pause()
        }
        setbtn(false)
        initializeAudio(arr[cur].link);
        console.log(arr[cur]);
    }

    const prisong = () => {
        setbtn(false)
        if (cur > 0) {
            setCur(cur - 1)
        }
        if (cur === 0) {
            setCur(cur)
        }
        if (audio != null) {
            audio.pause()
        }
        // setbtn(true)
        initializeAudio(arr[cur].link);
        console.log(arr[cur]);
    }

    const bar = () => {

    }




    return (
        <div style={{ width: '30%' }} className='overflow-auto min-w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 flex flex-col space-y-28'>
            <div className=' bottom-0 text-3xl font-mono rounded-2xl overflow-ellipsis'>
                title {(arr.length > 0) ? arr[cur].name : null}
            </div>
            <div className='flex justify-center '>
                <div class={(btn) ? "" : " text-9xl"}>
                    {(false) ? null : <FaMusic className='text-9xl rounded-full bg-slate-300 p-1 ' />}
                </div>
            </div>
            <div className='bottom-0 rounded-3xl text-3xl text-lime-100 h-28 p-5'>
                <hr />
                <input type="range" className='w-full bg-lime-100 cursor-pointer' value={currentTime} max={duration} min={0} onChange={e=>{setCurrentTime(e.target.value/100)}}/>
                <div className='mb-2 flex justify-between text-xl'>
                    <span id='now'>{formatTime(currentTime)}</span>
                    <span id='end'>{formatTime(duration)}</span>
                </div>

                <div className='mt-3 flex justify-between'>
                    <FaStepBackward onClick={prisong} className='cursor-pointer' />
                    {
                        (!btn) ? <FaPlay onClick={change}/> :<FaPause onClick={change} />
                    }
                    <FaStepForward onClick={nextsong} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    )
}
