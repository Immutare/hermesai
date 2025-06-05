import LoadingOrError from 'components/LoadingOrError'
import NavbarComponent from 'components/Navbar'
import AboutPage from 'pages/About'
import HistoryPage from 'pages/History'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Gallery = lazy(async () => import('pages/Gallery'))
const Home = lazy(async () => import('pages/Home'))
const Home2 = lazy(async () => import('pages/HomeHermesAI'))
const Details = lazy(async () => import('pages/History'))

export default function App(): ReactElement {
	return (
		<>
			<div className="flex flex-row">
				<div id="router" className="flex-grow">
					<BrowserRouter>
						<Suspense fallback={<LoadingOrError />}>
							<div className='flex flex-col h-full'>
								<NavbarComponent />
								<Routes>
									<Route path='/' element={<Home2 />} />
									<Route path='/history' element={<HistoryPage />} />
									<Route path='/about' element={<AboutPage />} />
								</Routes>
								
							</div>
						</Suspense>
					</BrowserRouter>
				</div>
			</div>
		</>
	)
}
