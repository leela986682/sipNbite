import React from 'react';
import arrow from '../../assets/down-arrow.png'
function Video() {
    return (
        <div>
            <div className="relative grid h-[35rem] max-w-screen flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
                <video
                    src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* <div className="relative text-center p-6 px-6 py-14 md:px-12 z-10">
                    <h2 className="mb-6 text-3xl font-medium text-white">
                        How we design and code open-source projects?
                    </h2>
                    <h5 className="mb-4 text-xl font-semibold text-slate-300">
                        Lewis Daniel
                    </h5>
                    <img
                        alt="Lewis Daniel"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        className="relative inline-block h-32 w-32 rounded-full border border-white"
                    />
                </div> */}
                <div className="relative text-center p-6 px-6 py-14 md:px-12 z-10"></div>
                <div className='absolute lg:top-16 inset-0 top-16 grid gap-5  text-center'>
                    <h1 className='hover:opacity-15 text-6xl text-white font-extrabold'>SipN'Bite</h1>
                    <div>
                        <p className=' text-4xl text-white font-bold'>India’s #1</p>
                        <p className=' text-4xl text-white font-bold'>food delivery app</p>
                    </div>
                    <div>
                        <p className=' text-xs text-white font-bold'>Experience fast & easy online ordering</p>
                        <p className=' text-xs text-white font-bold'> on the Zomato app</p>
                    </div>
                    <div className='flex justify-center motion-preset-oscillate '><p className='text-white font-bold'>Scroll down</p><img className='w-5 h-5' src={arrow} /></div>
                </div>
            </div>
        </div>
    );
}

export default Video;
