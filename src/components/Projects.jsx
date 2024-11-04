import React from "react"
import { ProjectSchema1 } from "./ProjectSchema"
import { ProjectSchema2 } from "./ProjectSchema2"
import projectDetails from "../data/Project"

export default function Projects(){
	return <div id='myid3' className="z-10">
		<div className="text-gray-300 ml-[11%] p-2 w-11/12 mt-36 mb-48">
			<p className="md:text-4xl text-3xl font-semibold text-gray-300 font-serif">Some Things I've Built: </p>
			<div className="w-11/12 md:space-y-96 mb-64">
				{
					projectDetails.map((project)=>{
						return (project.key%2==0) ? (
							<ProjectSchema1 
								image={project.image}
								title={project.title}
								description={project.description}
								github_url={project.github_url}
								proj_url={project.proj_url}
						/>
						): (
							<ProjectSchema2 
								image={project.image}
								title={project.title}
								description={project.description}
								github_url={project.github_url}
								proj_url={project.proj_url}
						/>
						)
					})
				}
			</div>
		</div>
	</div>
}