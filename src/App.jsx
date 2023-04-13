import { useState } from 'react';
import Dropdown from './components/Dropdown';
import './index.css';
import Panel from './components/Panel';

function App() {
    const [selection, setSelection] = useState(null);
    const options = [
        { label: 'Milk la la la', value: 'milk' },
        { label: 'Coke is very gud', value: 'Coke' },
        { label: 'Soju is very hot', value: 'Soju' },
    ];
    const handleSelected = (selected) => {
        setSelection(() => selected);
    };
    return (
        <div>
            <Dropdown
                options={options}
                onChange={handleSelected}
                value={selection}
            />
        </div>
    );
}

export default App;
