import React from 'react'

function Footer() {
  return (
    <>
      <div className=" bg-black-900 flex flex-col md:bg-black">
        {/* Spacer to push footer to bottom in the preview */}
        <div className="flex-grow"></div>

        {/* FOOTER START */}
        <footer id="footer" className="bg-black-900 text-white px-6 py-12 md:p-12 lg:p-16 flex flex-col justify-end font-sans border-t border-gray-600">

          {/* Main Footer Content - 3 Column Layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">

            {/* COLUMN 1: SAY HELLO */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-5 uppercase tracking-wide">Hello</h3>
              <p className="text-[15px] font-medium leading-relaxed mb-6">
                Open for exciting projects and collaborations.<br className="hidden lg:block" /> Let's connect or just drop a hi!
              </p>
              <div className="space-y-1.5 text-[15px] font-medium">
                <a href="mailto:rahulsingh3676g@gmail.com" className='text-blue-100 hover:text-blue-300 transition-colors'>
                  rahulsingh3676g@gmail.com
                </a>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINKS */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-5 uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-3 text-[15px] font-medium">
                <li>
                  <a href="#" className="hover:underline transition-all hover:text-blue-300">Home</a>
                </li>
                <li>
                  <a href="#works" className="hover:underline transition-all hover:text-blue-300">Projects</a>
                </li>
                <li>
                  <a href="#about" className="hover:underline transition-all hover:text-blue-300">About</a>
                </li>

                <li>
                  <a href="#contact" className="hover:underline transition-all hover:text-blue-300">Contact</a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: STALK ME */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-5 uppercase tracking-wide">Stalk Me</h3>
              <ul className="space-y-3 text-[15px] font-medium">
                <li>
                  <a href="https://www.linkedin.com/in/rahul-singh-dyp/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all hover:text-blue-300">Linkedin</a>
                </li>
                <li>
                  <a href="https://github.com/rahul3367" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all hover:text-blue-300">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline transition-all hover:text-blue-300">Twitter</a>
                </li>
              </ul>
            </div>

          </div>
        </footer>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-600 text-center py-6 px-6 md:py-8 md:px-12">
          <p className="text-gray-400 text-sm md:text-base font-medium">
            © 2026 All rights reserved by <span className="text-white font-semibold">Rahul Singh</span>
          </p>
        </div>
      </div>
      </>
  )
}

export default Footer
