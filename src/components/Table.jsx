import { Fragment } from 'react';
function Table({ data, config, keyFn }) {
  useEffect(() => {
    console.log("use effect");
  }, []);
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(rowData)}
        </td>
      );
    });

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>;
    });

  const renderedHeaders = config.map((column) => {
    return (
      <th key={column.label} className="p-2">
        {column.label}
      </th>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
