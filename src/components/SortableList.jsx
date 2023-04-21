import { useState } from 'react';

const data = [
    { address: 'Rua Sao Jose 24', beds: 2, price: 180 },
    { address: 'Rua Kosmonavtiv', beds: 1, price: 130 },
    { address: 'Rua Knyziv Koriotoviciv', beds: 3, price: 250 },
    { address: 'Rua Jose Antonio de Almeida', beds: 5, price: 380 },
];

const config = [
    {
        //
    },
];

function SortableList() {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);

    return (
        <div>
            <p>List</p>
        </div>
    );
}

export default SortableList;
