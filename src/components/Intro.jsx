import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro(){

	return <div className="relative">
		<div className="ml-[10%] p-8 font-serif space-y-4 mt-36">
			<p 
			className="z-10 animate-slide-down delay-75 md:text-lg font-semibold text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
           bg-clip-text text-transparent"
			>Hi, My name is</p>
			<p className="z-10 animate-slide-down delay-100 md:text-6xl font-semibold text-4xl bg-gradient-to-l from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent"
			>
				Harsh Goel
			</p>
			<div className="z-10 flex flex-row">
				<p className="text-gray-300 animate-slide-down md:text-5xl delay-300 font-semibold text-4xl">
					<span className="inline">I am a </span>
					<span className="inline-flex">
						<Typewriter
							options={{
								strings: ['Full Stack Developer', 'MERN Stack Developer'],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
				</p>
			</div>
			<div className="animate-fade-in delay-300 text-gray-300 z-10 pt-6 lg:w-7/12 w-9/12 leading-7">
				<p className="z-10">I’m a final-year Computer Science student at IIIT Sonepat, with a strong foundation in MERN stack development and a deep interest in building impactful, real-world applications. I am passionate about 
					creating innovative solutions, and I'm currently honing my skills in full-stack development, working on projects that integrate advanced technologies like web-rtc and open-source architectures. Recently, 
					I achieved AIR 577 in GATE 2024, showcasing my dedication and proficiency in core technical subjects. I am enthusiastic about starting my career in a dynamic environment where I can apply my technical expertise 
					and contribute to meaningful projects.</p>
			</div>
			<div className="hover:shadow-gray-300 z-10 hover:shadow-lg hover:translate-x-1 animate-fade-in delay-300 translate-y-5 border-2 inline-flex text-gray-300 p-3 pl-8 pr-8 rounded-xl">
				<a className='' href="https://drive.google.com/file/d/1HJv91MNvid5XfwWct_bV4uqPKIcAhjoo/view?usp=sharing">My Resume</a>
			</div>
		</div>
	</div>
}