import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

/* REDUCER WITH IMMER  */

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + action.payload;
            state.valueToAdd = 0;
            return;
        default:
            return state;
    }
};

/* DEFAULT REDUCER */
/* const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + action.payload,
                valueToAdd: 0,
            };
        default:
            return state;
    }
}; */

export default function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });
    const inc = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
        console.log('state', state);
    };
    const dec = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
        console.log('state', state);
    };
    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });
        console.log('state', state);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: ADD_VALUE_TO_COUNT,
            payload: state.valueToAdd,
        });

        console.log('state', state);
    };
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count: {state.count}</h1>
            <hr />
            <div className="flex flex-row">
                <Button className="mt-2" onClick={() => inc()}>
                    Increment
                </Button>
                <Button className="mt-2" onClick={() => dec()}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="add">Add a lot!</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    name="add"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                />
                <Button type="submit">Add it</Button>
            </form>
        </Panel>
    );
}
