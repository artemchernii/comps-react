import SortableList from '../components/SortableList';
import ChatTable from '../components/chatTable';

export default function SortableListPage() {
    const data = [
        {
            product: 'Apple MacBook Pro 17"',
            color: 'silver',
            category: 'Laptop',
            price: 2999,
        },
        {
            product: 'Microsoft Surface Pro',
            color: 'white',
            category: 'Laptop PC',
            price: 1999,
        },
        {
            product: 'Magic Mouse 2',
            color: 'black',
            category: 'Accessories',
            price: 99,
        },
        {
            product: 'Magic KeyBoard',
            color: 'white',
            category: 'Accessories',
            price: 149,
        },
        {
            product: 'Ear pods',
            color: 'white',
            category: 'Accessories',
            price: 299,
        },
    ];
    const config = [
        {
            label: 'Product Name',
            render: (product) => product.product,
        },
        {
            label: 'Color',
            render: (product) => product.color,
            sortValue: (product) => product.color,
        },
        {
            label: 'Category',
            render: (product) => product.category,
        },
        {
            label: 'Price',
            render: (product) => product.price,
            sortValue: (product) => product.price,
        },
    ];

    function genUniqueKey(column) {
        return column.label;
    }

    return (
        <div>
            <SortableList data={data} config={config} keyGen={genUniqueKey} />
            {/* <ChatTable /> */}
        </div>
    );
}
