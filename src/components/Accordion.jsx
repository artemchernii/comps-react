import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    console.log(expandedIndex);
    const renderedItems = items.map((item, index) => {
        const isExpended = index === expandedIndex;

        const handleClick = (nextIndex) => {
            setExpandedIndex((current) => {
                console.log(current);
                if (current === nextIndex) {
                    return -1;
                } else {
                    return nextIndex;
                }
            });
        };

        const icon = (
            <span className="text-2xl">
                {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div
                onClick={() => handleClick(index)}
                className={isExpended ? 'expended' : 'collapsed'}
                key={item.id}
            >
                <div className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer">
                    {item.label}
                    {icon}
                </div>
                {isExpended && (
                    <div className="border-b p-5">{item.content}</div>
                )}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
