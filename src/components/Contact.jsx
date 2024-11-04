import React from "react"
import { SocialIcon } from 'react-social-icons'

export default function Contact(){
	return <div id='myid2' className="z-10 justify-center text-gray-300 text-center font-serif">
		<div className="space-y-4 leading-6">
			<p className="text-xl">What's Next?</p>
			<p className="text-6xl font-semibold">Get In Touch</p>
		</div>
		<div className="m-3 p-2">
			<p className="ml-auto mr-auto w-7/12 tracking-wide">I’d love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to reach out. You can contact me through the following channels:</p>
			<div className="m-8 p-2 space-x-6">
				<SocialIcon className="hover:scale-125 hover:shadow-md hover:shadow-gray-300 rounded-full scale-110" network="github" url="https://github.com/Harshgoel22"/>
				<SocialIcon className="hover:scale-125 hover:shadow-md hover:shadow-gray-300 rounded-full" network="linkedin" url="https://www.linkedin.com/in/harshgoel0260/"/>
				<SocialIcon className="hover:scale-125 hover:shadow-md hover:shadow-gray-300 rounded-full" 	network="email" url="mailto:hgoel0260@gmail.com"/>
			</div>
		</div>
	</div>
}