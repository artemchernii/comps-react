import useNavigation from '../hooks/use-navigation';

export default function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (currentPath === path) {
        return children;
    }

    return null;
}
