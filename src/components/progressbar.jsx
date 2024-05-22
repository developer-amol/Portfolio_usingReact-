import React from 'react';

const SkillProgressBar = ({ skill, progress }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold">{skill}</h4>
      <div className="w-full bg-gray-200 h-2 rounded-lg overflow-hidden">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

const SkillsSection = () => {
  return (
    <div id="skills" className="w-screen h-screen bg-gray-300">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center py-6">
          <h1 id="about" className="font-bold text-3xl text-black">
            <span className="text-red-500 border-t-4 border-l-4 border-red-500 pl-2">S</span>
            <span>kill</span>
            <span className="border-b-4 border-r-4 border-red-500 pr-2">'s</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mr-8">
            <SkillProgressBar skill="HTML" progress={90} />
            <SkillProgressBar skill="CSS & Tailwind CSS" progress={85} />
            <SkillProgressBar skill="JavaScript" progress={70} />
            <SkillProgressBar skill="React" progress={70} />
          </div>
          <div>
            <SkillProgressBar skill="Java" progress={65} />
            <SkillProgressBar skill="Python" progress={70} />
            <SkillProgressBar skill="C++" progress={80} />
            <SkillProgressBar skill="C Language" progress={85} />
          </div>
        </div>
        <hr className="border-gray-500 my-4" />
        <h1 className='font-bold text-3xl flex justify-center py-4'>I am working with these technologies in the company. </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mr-8">
            <SkillProgressBar skill="Codeigniter" progress={60} />
          </div>
          <div>
            <SkillProgressBar skill="Wordpress" progress={90} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
