import Link from './Link';

const Sidebar = () => {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
    ];

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {links.map((link) => {
                return (
                    <Link
                        className={'mb-5'}
                        key={link.label}
                        to={link.path}
                        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default Sidebar;
