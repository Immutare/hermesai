import { useState, type ReactElement } from 'react'
import { FloatingLabel } from "flowbite-react";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { postQuery } from 'api/queries';
import { addToUserHistory } from 'utils/history';
import { IoSendOutline } from "react-icons/io5";

interface Properties {
	
}


export default function QueryInput(props: { onNewHistory: () => void }): ReactElement {
    const { onNewHistory } = props;
    const [isLoading, setIsLoading ] = useState(false)
    const [request, setRequest] = useState<string>('')
    const [responses, setResponses] = useState<Array<string>>([])
    const onClickHandler = (event: any) => {
        event.preventDefault()
        event.stopPropagation()
        if (!isLoading) {
            console.log(request);
            requestServer(request);

            setTimeout(function() {
                setIsLoading(false);
            }, 2000);
        }
        setIsLoading(true);
    }

    const onChangeHandler = (event: any) => {
        setRequest(event.target.value);
        // CheckIfIsButtonEnabled();
    }

    const requestServer = (request: string) => {
        addToUserHistory({
            request: request,
            response: request,
            datecreated: new Date()
        });
        setResponses(responses);
        setIsLoading(false);
        onNewHistory();
        // postQuery(request).then((response) => {
        //     const querymateAnswer = { ...response.data };
        //     
        //     responses.push(querymateAnswer);

        //     setResponses(responses);
        //     setIsLoading(false);
        //     onNewHistory();
        // }).catch((err) => {
        //     console.error(err);
        //     setIsLoading(false);
        // })
    }

	return (
		<div className='flex flex-row w-full'>
			<FloatingLabel
                variant="filled"
                label="Ask your question"
                helperText="Remember, we only allow english"
                value={request}
                onChange={onChangeHandler}
            />
            <Button 
                className='font-medium text-center inline-flex items-center text-white'
                size="md" 
                isProcessing={isLoading}
                disabled={request.trim() === '' || isLoading}
                processingSpinner={isLoading ? <AiOutlineLoading className="h-6 w-6 animate-spin" /> : null}
                onClick={onClickHandler}>
                {isLoading ? null : <IoSendOutline />}
            </Button>
		</div>
	)
}
