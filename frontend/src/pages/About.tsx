import Head from 'components/Head'
import { type ReactElement } from 'react'
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiFastapi, SiProbot  } from "react-icons/si";



export default function AboutPage(): ReactElement {
		
	return (
		<>
			<Head title={'About'} />
			<div className='flex flex-auto font-mono'>
				<div className='flex flex-col flex-nowrap p-2 basis-1/6 text-slate-800'>
                    <p>&lt; Who I Am &gt; </p>
                    <p className='font-semibold text-6xl'>About</p>
                </div>
                <div className='flex flex-row p-2 basis-5/6'>
                    <div className=''>
                        <p className='font-bold text-2xl'>This is Querymate</p>
                        <p>Querymate is a user-friendly platform that teaches SQL through simple, everyday language. It lets users query data tasks in plain terms, which are then automatically converted into SQL queries. With interactive examples and real-time feedback, Querymate makes learning SQL accessible for beginners and non-technical users.</p>

                        <div className='grid grid-flow-row gap-8 grid-cols-2 py-12'>
                            <div className='grid grid-flow-col gap-4 '>
                                <FaReact size={'80px'}/>
                                <div className='col-span-2'>
                                    <p className='font-bold text-xl'>React</p>
                                    <p>This is app is built with React with other libraries based on React, as well as Tailwind for fast and lightweight CSS</p>
                                </div>
                            </div>
                            <div className='grid grid-flow-col gap-4'>
                                <SiTypescript size={'80px'}/>
                                <div className='col-span-2'>
                                    <p className='font-bold text-xl'>Typescript</p>
                                    <p>Using Typescript for better faster and better quality code on the frontend, less prone to errors like type errors</p>
                                </div>
                            </div>
                            <div className='grid grid-flow-col gap-4'>
                                <SiFastapi size={'80px'}/>
                                <div className='col-span-2'>
                                    <p className='font-bold text-xl'>FastAPI</p>
                                    <p>The REST API is built using FastAPI with Python along with other libraries like SQLAlchemy using a standard MVC architecture</p>
                                </div>
                            </div>
                            <div className='grid grid-flow-col gap-4'>
                                <SiProbot size={'80px'}/>
                                <div className='col-span-2'>
                                    <p className='font-bold text-xl'>Ollama</p>
                                    <p>Querymate is an AI built using Ollama as the LLM, along with libraries like LangChain and OpenAI to bring access to the database and return the service you use</p>
                                </div>
                            </div>
                        </div>

                        <p className='font-bold text-2xl pb-4'>The author</p>
                        <div className='grid grid-flow-row grid-cols-6'>
                            <div className="col-span-2 flex flex-col items-center pb-10">
                                <img alt="Author image" height="96" src="/author.jpg" width="240" className="mb-3 shadow-lg" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Carlos Garcia - A01795206</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
                            </div>
                            <div className='col-span-3'>
                                <p className='font-medium'>Hi!</p>
                                <p>My name is Carlos and I'm a software developer and sole author of this project. This project was made for a subject on my master’s degree, please feel free to reach out if you are interested on this project and I can explain to you how this project works.</p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</>
	)
}
