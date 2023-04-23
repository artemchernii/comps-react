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
                <tbody>
                    {renderedRows}
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4">Laptop</td>
                        <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">White</td>
                        <td className="px-6 py-4">Laptop PC</td>
                        <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4">Accessories</td>
                        <td className="px-6 py-4">$99</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default SortableList;
