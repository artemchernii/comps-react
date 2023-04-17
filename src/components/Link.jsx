import classnames from 'classnames';
import useNavigation from '../hooks/useNavigation';

export default function Link({ to, className, activeClassName, children }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classnames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    );
    const handleClick = (e) => {
        if (e.ctrlKey || e.metaKey) {
            return;
        }
        e.preventDefault();
        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}
