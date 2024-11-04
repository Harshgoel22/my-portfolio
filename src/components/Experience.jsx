import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faNodeJs, faNode, faReact, faJava} from '@fortawesome/free-brands-svg-icons'
import { SiNextdotjs, SiTypescript, SiJquery, SiMysql, SiMongodb, SiRedux } from "react-icons/si";

export default function Experience(){

	function changeColor(e,key){
		try{
			const id = e.target.id;
			const element = document.getElementById(id);
			if(element){
				// console.log(element);
				setTimeout(()=>{
					element.classList[key]('text-yellow-500');
				},800);
				// console.log(element.classList);
			}
		}catch(err){
			console.log(err);
		}
	}

	return <div className="text-gray-300 font-serif w-11/12 ml-[11%] p-2">
		<p className="text-4xl font-semibold">Experience</p>
		<p className="mt-12 leading-7 w-11/12">I've been doing web development for about 2 years now, and I'm always eager to learn more in this fast paced industry.</p>
		<div className="m-4 mx-0 p-2 px-0">
			<p className="font-semibold">Some technologies I've worked with:</p>
			<div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-2">
					<FontAwesomeIcon id="1" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faHtml5}  className="m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16" />
					<FontAwesomeIcon id="2" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faCss3}   className="m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16"/>
					<FontAwesomeIcon id="3" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faNodeJs} className="m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16" />
					<FontAwesomeIcon id="4" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faNode}   className="m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16"/>
				
					<FontAwesomeIcon id="5" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faReact} className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16" />
					<FontAwesomeIcon id="6" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} icon={faJava}  className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16"/>
					<SiRedux 				 id="7" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} title="Redux"  className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16"/>
					<SiJquery 			 id="8" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} title="Jquery" className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20 min-h-20 min-w-16"/>
				
					<SiNextdotjs 	id="9" 	onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20	min-h-20 min-w-16"/>
					<SiTypescript	id="10" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20	min-h-20 min-w-16"/>
					<SiMongodb   	id="11" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20	min-h-20 min-w-16"/>
					<SiMysql     	id="12" onMouseMove={e=>changeColor(e,'add')}	onMouseOut={e=>changeColor(e,'remove')} className="hover:text-yellow-500 m-4 p-2 md:min-h-28 md:min-w-20	min-h-20 min-w-16"/>
				
			</div>
		</div>
	</div>
}