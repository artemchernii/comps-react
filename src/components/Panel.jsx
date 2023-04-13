import classnames from 'classnames';

function Panel({ children, className, ...rest }) {
    const classes = classnames(className, 'border rounded p-3 bg-white w-full');
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}

export default Panel;
