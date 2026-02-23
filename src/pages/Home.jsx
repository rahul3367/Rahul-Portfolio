import React from 'react'
import image1 from "../assets/SelfImage.jpeg"

function Home() {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#e8e6e1] text-black pt-32 px-6"
        >
            <div className="max-w-7xl mx-auto">
               

                <div className='flex gap-10'>
                    {/* Small Tag */}
                    <div>
                        <p className="text-sm tracking-widest uppercase mb-6 text-black/70">
                            Web Developer & Designer
                        </p>

                        {/* Big Heading */}
                        <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] mb-10">
                         RAHUL <br />SINGH
                        </h1>

                        <p className="max-w-md text-lg text-black/70 leading-relaxed">
                        I build fast, modern websites that help businesses grow.
                        Focused on clean UI, performance, and scalable systems.
                    </p>
                    </div>

                    <div className='w-full flex justify-center '>
                        <img
                            src={image1}
                            alt="profile"
                            className="rounded-xl w-110 grayscale hover:grayscale-0 transition duration-500"
                        />
                        {/* <span className='w-full flex justify-end'>
                        <img
                            src={image1}
                            alt="profile"
                            className="rounded-xl w-110 grayscale hover:grayscale-0 transition duration-500"
                        />
                        </span> */}
                    </div>
                </div>
            </div>


        </section>
    );
}

export default Home