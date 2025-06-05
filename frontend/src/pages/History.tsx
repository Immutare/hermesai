import { IQueryRequest } from 'api/queries';
import Head from 'components/Head'
import { useRef, type ReactElement, useState, useEffect } from 'react'
import { getUserHistory } from 'utils/history';

const DESKTOP_IMAGE_WIDTH_PERCENTAGE = 0.4
const MOBILE_IMAGE_HEIGHT_PERCENTAGE = 0.3

export default function HistoryPage(): ReactElement {
	const [history, setHistory] = useState<Array<IQueryRequest>>([]);
	const scrollableRef = useRef(null);

	useEffect(() => {
		setHistory(getUserHistory());
	}, []);

	useEffect(() => {
		// Scroll to the top of the component when content changes
		if (scrollableRef.current) {
			scrollableRef.current.scrollTo(0, 0);
		}


 	  }, [history]);

	const onNewHistory = () => {
		setHistory(getUserHistory());
	}
	
	return (
		<>
			<Head title={'User history'} />
			<div className='grid'>
				<div className='p-2 overflow-scroll h-full max-h-[90vh]' ref={scrollableRef}>
					{ [...history].reverse().map((node, index) => { 
						return (
							<div className='py-4 border-b-2' key={`${index}-${node.request.replace(" ", "")}`}>
								<p className='font-semibold'>User: </p> { node.request }
								<br />
								<p className='font-semibold'>Querymate: </p> { node.response || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate porttitor lorem, et suscipit augue tristique non. Sed venenatis lorem sit amet mi mattis, non accumsan ante auctor. Suspendisse orci neque, maximus non sagittis id, dignissim molestie sapien. Sed egestas elit elementum, elementum tellus vitae, cursus neque. Sed iaculis, metus sit amet tempor varius, velit neque maximus felis, ut dignissim ipsum tellus ac lectus. Integer id magna arcu. Etiam hendrerit massa a cursus efficitur. Suspendisse potenti. Proin varius, erat eu fringilla consequat, urna tellus pellentesque dui, quis ultricies tortor arcu fringilla justo. ' }
							</div>
						);
						})
					}
				</div>
			</div>
		</>
	)
}
