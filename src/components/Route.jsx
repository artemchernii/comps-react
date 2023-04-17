import useNavigation from '../hooks/useNavigation';

export default function Route({ path, children }) {
    const { currentPath } = useNavigation();

    if (currentPath === path) {
        return children;
    }

    return null;
}
