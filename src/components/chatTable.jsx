import { useEffect, useState } from 'react';

const data = [
    { name: 'John', age: 25, city: 'New York' },
    { name: 'Mary', age: 30, city: 'Los Angeles' },
    { name: 'Bob', age: 20, city: 'Chicago' },
];
const ChatTable = () => {
    return <Table data={data} />;
};
const Table = ({ data }) => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const columns = Object.keys(data[0]);

    const handleSort = (columnName) => {
        if (columnName !== sortColumn) {
            setSortColumn(columnName);
            setSortDirection('asc');
            return;
        }
        if (sortDirection === null) {
            setSortDirection((current) => 'asc');
            setSortColumn((current) => columnName);
        } else if (sortDirection === 'asc') {
            setSortDirection((current) => 'desc');
            setSortColumn((current) => columnName);
        } else if (sortDirection === 'desc') {
            setSortDirection((current) => null);
            setSortColumn((current) => null);
        }
    };
    let sortedData = data;

    if (sortColumn && sortDirection) {
        sortedData = [...data].sort((a, b) => {
            const reverseValue = sortDirection === 'asc' ? 1 : -1;
            if (sortColumn && a[sortColumn] && b[sortColumn]) {
            }

            if (typeof a[sortColumn] === 'string') {
                return (
                    a[sortColumn].localeCompare(b[sortColumn]) * reverseValue
                );
            } else if (typeof a[sortColumn] === 'number') {
                return (a[sortColumn] - b[sortColumn]) * reverseValue;
            }
            return null;
        });
    }
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column} onClick={() => handleSort(column)}>
                            {column}
                            {sortColumn === column && (
                                <span>
                                    {sortDirection === 'asc' ? '▲' : '▼'}
                                </span>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <td key={`${rowIndex}-${columnIndex}`}>
                                {row[column]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ChatTable;
