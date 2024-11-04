import React from "react";
import { SocialIcon } from 'react-social-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export function ProjectSchema2({image, title, description, github_url, proj_url}){
	return <div className="w-11/12 m-7 p-12 flex flex-row relative">
		<div className="absolute z-50 md:left-24">
			<p className="text-left text-2xl font-serif font-semibold text-gray-300 m-2 p-2 mt-0">{title}</p>
			<div className="min-h-fit bg-gray-950 w-9/12 m-2 p-2 opacity-75 rounded-lg shadow-md shadow-gray-300">
				<p className="m-1 p-1 opacity-100">{description[0]}</p>
				<p className="m-1 p-1 opacity-100">{description[1]}</p>
			</div>
			<div className="flex flex-row float-left space-x-2 m-1">
				<div className=" m-1 "><SocialIcon className="hover:scale-110 hover:shadow-md hover:shadow-gray-300 rounded-full" network="github" url={github_url} /></div>
				<div className="m-1 h-12 w-12 rounded-full bg-gray-900 hover:scale-110 hover:shadow-md hover:shadow-gray-300">
					<a href={proj_url}>
						<FontAwesomeIcon className="p-4" icon={faArrowUpRightFromSquare} />
					</a>
				</div>
			</div>
		</div>
		<div className="min-w-44 max-w-xl absolute group md:right-24">
			<img src={image} alt={title+'-image'} className="object-cover"/>
			<div class="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-70 transform group-hover:translate-y-0 translate-y-full 
				transition-all duration-500 ease-in-out text-center pt-28">
				<a href={proj_url}>
					<FontAwesomeIcon className="p-4" icon={faArrowUpRightFromSquare} />
				</a>
			</div>
		</div>
	</div>
}