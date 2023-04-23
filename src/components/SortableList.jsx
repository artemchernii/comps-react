import { Fragment } from 'react';
import useSort from '../hooks/use-sort';
import { getIcons } from './SortableTable';

function SortableList({ data, config, keyGen }) {
    const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
        config,
        data
    );
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => {
                return (
                    <th
                        onClick={() => setSortColumn(column.label)}
                        scope="col"
                        className="px-6 py-3 cursor-pointer flex justify-center items-center"
                    >
                        {column.label}
                        <div className="text-xl">
                            {getIcons(column.label, sortBy, sortOrder)}
                        </div>
                    </th>
                );
            },
        };
    });
    const renderedHeaders = updatedConfig.map((column) => {
        if (column.header) {
            return (
                <Fragment key={keyGen(column.label)}>
                    {column.header()}
                </Fragment>
            );
        }
        return (
            <th key={keyGen(column.label)} scope="col" className="px-6 py-3">
                {column.label}
            </th>
        );
    });

    const renderedRows = sortedData.map((product) => {
        const renderedCells = updatedConfig.map((column) => {
            if (column.label === 'Product Name') {
                return (
                    <th
                        key={keyGen(column)}
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {column.render(product)}
                    </th>
                );
            }

            return (
                <td key={keyGen(column)} className="px-6 py-4">
                    {column.render(product)}
                </td>
            );
        });
        return (
            <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={keyGen(product)}
            >
                {renderedCells}
            </tr>
        );
    });
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>{renderedHeaders}</tr>
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
}

export default SortableList;
