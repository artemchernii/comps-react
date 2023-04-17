import { useEffect, useRef, useState } from 'react';
import { GoChevronUp, GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, onChange, value }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(); // define new element using useRef

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);

        return () => document.removeEventListener('click', handler, true);
    }, []);

    const handleSelectOption = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const handleDropdownToggle = () => {
        setIsOpen((current) => {
            return !current;
        });
    };

    const optionsRendered = options.map((option) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-2 px-3"
                onClick={() => handleSelectOption(option)}
                key={option.value}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div
            ref={divEl}
            /* sing ref to element */
            className="w-52 relative m-4"
        >
            {/* <label>Dropdown</label> */}
            <Panel
                className="flex justify-between items-center cursor-pointer"
                onClick={handleDropdownToggle}
            >
                {value?.label || 'Select...'}
                {isOpen ? (
                    <GoChevronUp className="text-xl" />
                ) : (
                    <GoChevronDown className="text-xl" />
                )}
            </Panel>

            {isOpen && (
                <Panel className="absolute top-full ">{optionsRendered}</Panel>
            )}
        </div>
    );
}

export default Dropdown;
