import { useQuery } from '@tanstack/react-query'
import getFruits from 'api/getFruits'
import { IQueryRequest } from 'api/queries'
import Chatbox from 'components/Chatbox'
import DiagramCanvas from 'components/DiagramCanvas'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import QueryInput from 'components/QueryInput'
import { useState, type ReactElement, useEffect, useRef } from 'react'
import { getUserHistory } from 'utils/history'

export default function HomePage(): ReactElement {
	return (
		<>
			<Head title='Querymate' />
			<div className='p-2 flex flex-col flex-auto h-[96vh]'>
                <div className='flex flex-auto'>
					<div className='flex flex-auto basis-3/4'>
                    	<DiagramCanvas />
					</div>
					<div id='chatbox' className='flex flex-col justify-center items-center basis-1/4 max-h-screen'>
						<Chatbox />
					</div>
                </div>
			</div>
		</>
	)
}
