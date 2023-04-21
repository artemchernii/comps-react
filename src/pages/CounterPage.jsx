import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

export default function CounterPage({ initialCount }) {
    const { count, increment } = useCounter(initialCount);

    return (
        <div>
            <h1>Count: {count}</h1>
            <hr />
            <Button className="mt-2" onClick={() => increment()}>
                Increment
            </Button>
        </div>
    );
}
