import classNames from 'classnames';

function Button({
    children,
    primary,
    secondary,
    danger,
    warning,
    success,
    outline,
    rounded,
    ...rest
}) {
    const classes = classNames(
        rest.className,
        'px-4 py-1.5 border flex items-center',
        {
            'border-blue-500 bg-blue-500 text-white': primary,
            'border-gray-900 bg-gray-900 text-white': secondary,
            'border-red-500 bg-red-500 text-white': danger,
            'border-yellow-400 bg-yellow-400 text-white': warning,
            'border-green-500 bg-green-500 text-white': success,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-800': outline && secondary,
            'text-red-500': outline && danger,
            'text-yellow-400': outline && warning,
            'text-green-500': outline && success,
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}
Button.propTypes = {
    checkAboutVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger,
    }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!success) +
            Number(!!warning) +
            Number(!!danger);
        if (count > 1) {
            throw new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;
