import Chatbox from 'components/Chatbox';
import Head from 'components/Head';
import Particles from 'components/particles/particles';
import { type ReactElement } from 'react';

export default function HomePage2(): ReactElement {
	



	return (
		<>
			<Head title='HermesAI' />

			<div className="relative font-inter antialiased">
			<main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
				<div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
					<div className="text-center">

						{/* <!-- Illustration #1 --> */}
						<div className="absolute top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
							<img src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg" className="max-w-none" width="852" height="582" alt="Illustration" />
						</div>
						
						{/* <!-- Illustration #2 --> */}
						<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
							<img src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg" className="max-w-none" width="852" height="582" alt="Illustration" />
						</div>

						{/* <!-- Particles animation --> */}
						<Particles className="absolute inset-0 pointer-events-none" quantity={50} />
					
						<div className="relative">
							<div className='bg-[rgba(255,_255,_255,_0.2)] backdrop-filter backdrop-blur-[5px] rounded-2xl min-h-[80vh] min-w-[50vw] flex flex-col justify-center items-center basis-1/4 max-h-[80vh]'>
								<Chatbox />
							</div>
							{/* <h1 className="inline-flex font-extrabold text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">HermesAI</h1>
							<div className="max-w-3xl mx-auto mb-8">
								<p className="text-lg text-slate-400">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
							</div>
							<div className="inline-flex justify-center space-x-4">
								<div>
									<a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="#0">
										Get Started <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
									</a>
								</div>
								<div>
									<a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-slate-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-slate-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
										Read the docs
									</a>
								</div>https://codepen.io/AmJustSam/pen/ModORY
							</div> */}
						</div>
					</div>
			
				</div>
			</main>
		</div>
		</>
	)
}
