import { useEffect, useReducer } from 'react';

export default function ExampleWithUseReducer() {
    const [{ items, status, error }, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'REQUEST_START':
                    return { ...state, status: 'loading' };
                case 'REQUEST_SUCCESS':
                    return {
                        ...state,
                        status: 'success',
                        items: action.payload,
                    };
                case 'REQUEST_ERROR':
                    return { ...state, status: 'error', error: action.payload };
                default:
                    return state;
            }
        },
        { items: [], status: 'init', error: undefined }
    );

    useEffect(() => {
        dispatch({ type: 'REQUEST_START' });
        fetchTodoItems()
            .then((items) => {
                dispatch({
                    type: 'REQUEST_SUCCESS',
                    payload: items,
                });
            })
            .catch((e) => {
                dispatch({
                    type: 'REQUEST_ERROR',
                    payload: e,
                });
            });
    }, []);

    return (
        <div>
            <div>Items</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    );
}

const fetchTodoItems = async () => {};
