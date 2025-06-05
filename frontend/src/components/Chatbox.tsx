import { IQueryRequest } from 'api/queries'
import QueryInput from 'components/QueryInput'
import { useState, type ReactElement, useEffect, useRef } from 'react'
import { getUserHistory } from 'utils/history'
import { IoSendOutline } from "react-icons/io5";

export default function ChatboxComponent(): ReactElement {
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
            <div className='flex flex-col-reverse flex-auto overflow-scroll max-h-[75%] min-w-[95%]' ref={scrollableRef}>
                { [...history].reverse().map((node, index) => { 
                    return (
                        <div className='w-full imessage flex flex-col text-[1.25rem] mt-[0] mx-[auto] mb-4 max-w-full px-6 py-2' key={`${index}-${node.request.replace(" ", "")}`}>
                            <p className='rounded-[1.15rem] leading-tight max-w-[75%] px-[.875rem] py-2 relative [word-wrap:break-word]
                                self-end text-[#fff] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                                { node.request }
                            </p>
                            <p className='rounded-[1.15rem] leading-tight max-w-[75%] px-[.875rem] py-2 relative [word-wrap:break-word]
                                items-start bg-[#e5e5ea] text-[#000] rounded-br-[0.8rem_0.7rem] [border-left:1rem_solid_#e5e5ea] -left-[0.35rem] translate-x-[0] -translate-y-[0.1rem]'>
                                { node.response || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate porttitor lorem, et suscipit augue tristique non. Sed venenatis lorem sit amet mi mattis, non accumsan ante auctor. Suspendisse orci neque, maximus non sagittis id, dignissim molestie sapien. Sed egestas elit elementum, elementum tellus vitae, cursus neque. Sed iaculis, metus sit amet tempor varius, velit neque maximus felis, ut dignissim ipsum tellus ac lectus. Integer id magna arcu. Etiam hendrerit massa a cursus efficitur. Suspendisse potenti. Proin varius, erat eu fringilla consequat, urna tellus pellentesque dui, quis ultricies tortor arcu fringilla justo. ' }
                            </p>
                        </div>
                        // <div className='py-4 border-b-2' key={`${index}-${node.request.replace(" ", "")}`}>
                        //     <p className='font-semibold'>User: </p> { node.request }
                        //     <br />
                        //     <p className='font-semibold'>HermesAI: </p> { node.response || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate porttitor lorem, et suscipit augue tristique non. Sed venenatis lorem sit amet mi mattis, non accumsan ante auctor. Suspendisse orci neque, maximus non sagittis id, dignissim molestie sapien. Sed egestas elit elementum, elementum tellus vitae, cursus neque. Sed iaculis, metus sit amet tempor varius, velit neque maximus felis, ut dignissim ipsum tellus ac lectus. Integer id magna arcu. Etiam hendrerit massa a cursus efficitur. Suspendisse potenti. Proin varius, erat eu fringilla consequat, urna tellus pellentesque dui, quis ultricies tortor arcu fringilla justo. ' }
                        // </div>
                    );
                    })
                }
            </div>
            <div className='flex justify-center items-center basis-1/5 max-h-[25%]'>
                <QueryInput onNewHistory={onNewHistory}/>
            </div>
        </>
    )
}