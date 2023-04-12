import Accordion from './components/Accordion';
import './index.css';

function App() {
    const items = [
        {
            id: 1313,
            label: 'Can I use React on a project?',
            content: 'You can you React on any project.',
        },
        {
            id: 1132132,
            label: 'Can I use CSS on a project?',
            content: 'You can you CSS on any project.',
        },
        {
            id: 1839,
            label: 'Can I use HTML on a project?',
            content: 'You can you HTML on any project.',
        },
    ];
    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;
