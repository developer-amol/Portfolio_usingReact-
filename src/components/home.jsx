import React, { Component } from 'react';
import Mypic from '../assets/mypic.png'; // Importing the image


class Home extends Component {
  render() {
    return (
      <>
        <div className="flex bg-slate-800 min-h-screen">
          <div className="container mx-auto flex justify-between py-36 px-4">
            <div className="text-white mr-64">
              <h3>WELCOME!</h3>
              <div>
                <h1 className="font-bold text-3xl"><span>I Am</span><span className="text-red-500"> Web Designer</span></h1>
              </div>
              <p>Transforming ideas into immersive online realities, web developers blend creativity with technical prowess to craft digital worlds that captivate and connect.</p>
            </div>
            <div className=" absolute right-6 top-20 w-700 h-auto "> 
              {/* Using imported image */}
              <img src={Mypic} alt="My Picture" style={{ width: '350px', height: 'auto', borderRadius: '50%', marginBottom: '30px',  }} />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 min-h-screen pt-4">
          <div className="container mx-auto">
            <div className="flex justify-center items-center py-6">
              <h1 id='about' className="font-bold text-3xl">
                <span className="text-red-500 border-t-4 border-l-4 border-red-500 pl-2">A</span>
                <span>bou</span>
                <span className="border-b-4 border-r-4 border-red-500 pr-2">t</span>
              </h1>
            </div>
            <div className='flex justify-between items-center mt-52'>
              <p className=''>Passionate and dedicated, I am a web enthusiast with a flair for creativity and a penchant for problem-solving. I thrive on turning concepts into captivating digital experiences, blending technical expertise with a keen eye for design. With a commitment to continuous learning and growth, I embark on every project with enthusiasm, aiming to leave a lasting impact on the ever-evolving landscape of the web.</p>
            </div>
          </div>
        </div>
        {/* Education */}

        <div className="education w-screen h-screen bg-slate-800 pt-4">
            <div className="container mx-auto">
                <div className="flex justify-center items-center py-6">
                <h1 id='about' className="font-bold text-3xl text-white">
                    <span className="text-red-500 border-t-4 border-l-4 border-red-500 pl-2">Ed</span>
                    <span>ucati</span>
                    <span className="border-b-4 border-r-4 border-red-500 pr-2">on</span>
                </h1>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-gray-200 h-60  ">
                      <div className='flex justify-center'>
                        <h2 className='font-bold text-lg '><span className='text-red-500'>PUC</span> Science</h2><br /> 
                      </div>
                      <hr className="border-gray-500" />
                        <div className='px-4  text-sm'>
                          <h3 className='font-bold '>Univercity : <span className='font-bold text-red-500'>MSBE</span></h3>
                          <p ><span className='font-bold '>Collage :</span > <span>Pandit Javaharla Nehru Togari. </span></p>
                        </div>
                    </div>
                    <div className="bg-gray-200 h-60  justify-center items-center">
                    <div className='flex justify-center'>
                        <h2 className='font-bold text-lg '><span className='text-red-500'>BSc</span> CS</h2><br /> 

                    </div>
                    <hr className="border-gray-500" />
                      <div className='px-4 text-sm'>
                            <h3 className='font-bold  '>Univercity : <span className='font-bold text-red-500'>SRTMUN</span></h3>
                            <p ><span className='font-bold '>Collage :</span > <span>Matrabhoomi Mahavidhyalay Udgir. </span></p>
                            <p ><span className='font-bold '>During :</span > <span> 2017 - 2020</span></p>
                      </div>
                      </div>
                    <div className="bg-gray-200 h-60 justify-center items-center">
                    <div className='flex justify-center'>
                        <h2 className='font-bold text-lg '><span className='text-red-500'>M</span>CA</h2><br /> 
                    </div>
                    <hr className="border-gray-500" />
                        <div className='px-4  text-sm'>
                            <h3 className='font-bold border-gray-950 border-l-2 pl-1'>Univercity : <span className='font-bold text-red-500'>VTU</span></h3>
                            <p ><span className='font-bold border-gray-950 border-l-2 pl-1'>Collage :</span > <span>Bhimanna Khandre Institute of Technology Bhalki. </span></p>
                            <p ><span className='font-bold border-gray-950 border-l-2 pl-1'>During :</span > <span> 2021 - 2023</span></p>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
      </>
    );
  }
}

export default Home;
