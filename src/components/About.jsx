import React from "react"
import myimg from '../assets/my_image2.jpg'

export default function About(){
	return <div className="z-10 space-y-4 text-gray-300 font-serif ml-[10%] p-2">
		<div><p className="text-4xl text-gray-300 font-semibold m-4 pt-2">About Me</p></div>
		<div className="grid lg:grid-cols-2 grid-rows-2 gap-4 justify-around pt-8">
			<div className="m-4 space-y-6 lg:w-11/12 w-8/12 leading-8">
				<p>
				I am a final year student at IIIT Sonipat, specializing as a Full Stack/MERN Stack Developer. With a solid foundation in HTML, CSS, Tailwind CSS, Material UI, React.js, TypeScript, JavaScript, Node.js, Express.js, MySQL, MongoDB, Redux, and REST APIs, I have successfully completed various projects that showcase my skills and creativity.
				</p>
				<p>
				I am passionate about leveraging technology to build innovative solutions and am eager to collaborate with others who share this vision. Additionally, I am GATE qualified with an All India Rank of 577, underscoring my commitment to excellence in my field. Let’s connect and create something amazing together!
				</p>
			</div>
			<div className="w-8/12">
				<img src={myimg} className="lg:h-[360px] lg:w-56 lg:rounded-br-full lg:rounded-t-full lg:rounded-bl-xl rounded-full h-80 w-80 p-6 ml-auto mr-auto lg:translate-x-48"></img>
			</div>
		</div>
	</div>
}