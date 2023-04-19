import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((current) => !current);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    const actionBar = (
        <Button onClick={handleClick} success>
            I accept
        </Button>
    );
    const modal = (
        <Modal onClose={onClose} actionBar={actionBar}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere, quam eu tempor rutrum, massa ex congue nulla, eu
                fermentum mauris magna quis dolor. Integer ante tortor, commodo
                vitae turpis eu, pretium accumsan purus. Mauris tortor odio,
                pellentesque vel lacinia nec, aliquet ac ante. Sed tempus metus
                elit. In feugiat sapien vitae est accumsan, non sagittis elit
                ornare. In hac habitasse platea dictumst. Vestibulum convallis
                lectus at dolor egestas, ut congue metus consequat. Proin
                condimentum tincidunt mi in egestas. Aenean diam dolor, semper
                non vulputate viverra, tincidunt non tortor. Nulla quis ipsum
                bibendum, commodo sem in, rutrum nulla. Nullam rhoncus ut turpis
                in pulvinar. Suspendisse faucibus arcu sapien, sed suscipit
                dolor feugiat quis. Donec feugiat mattis urna sit amet sodales.
            </p>
        </Modal>
    );
    return (
        <div>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere, quam eu tempor rutrum, massa ex congue nulla, eu
                fermentum mauris magna quis dolor. Integer ante tortor, commodo
                vitae turpis eu, pretium accumsan purus. Mauris tortor odio,
                pellentesque vel lacinia nec, aliquet ac ante. Sed tempus metus
                elit. In feugiat sapien vitae est accumsan, non sagittis elit
                ornare. In hac habitasse platea dictumst. Vestibulum convallis
                lectus at dolor egestas, ut congue metus consequat. Proin
                condimentum tincidunt mi in egestas. Aenean diam dolor, semper
                non vulputate viverra, tincidunt non tortor. Nulla quis ipsum
                bibendum, commodo sem in, rutrum nulla. Nullam rhoncus ut turpis
                in pulvinar. Suspendisse faucibus arcu sapien, sed suscipit
                dolor feugiat quis. Donec feugiat mattis urna sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere, quam eu tempor rutrum, massa ex congue nulla, eu
                fermentum mauris magna quis dolor. Integer ante tortor, commodo
                vitae turpis eu, pretium accumsan purus. Mauris tortor odio,
                pellentesque vel lacinia nec, aliquet ac ante. Sed tempus metus
                elit. In feugiat sapien vitae est accumsan, non sagittis elit
                ornare. In hac habitasse platea dictumst. Vestibulum convallis
                lectus at dolor egestas, ut congue metus consequat. Proin
                condimentum tincidunt mi in egestas. Aenean diam dolor, semper
                non vulputate viverra, tincidunt non tortor. Nulla quis ipsum
                bibendum, commodo sem in, rutrum nulla. Nullam rhoncus ut turpis
                in pulvinar. Suspendisse faucibus arcu sapien, sed suscipit
                dolor feugiat quis. Donec feugiat mattis urna sit amet sodales.
            </p>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere, quam eu tempor rutrum, massa ex congue nulla, eu
                fermentum mauris magna quis dolor. Integer ante tortor, commodo
                vitae turpis eu, pretium accumsan purus. Mauris tortor odio,
                pellentesque vel lacinia nec, aliquet ac ante. Sed tempus metus
                elit. In feugiat sapien vitae est accumsan, non sagittis elit
                ornare. In hac habitasse platea dictumst. Vestibulum convallis
                lectus at dolor egestas, ut congue metus consequat. Proin
                condimentum tincidunt mi in egestas. Aenean diam dolor, semper
                non vulputate viverra, tincidunt non tortor. Nulla quis ipsum
                bibendum, commodo sem in, rutrum nulla. Nullam rhoncus ut turpis
                in pulvinar. Suspendisse faucibus arcu sapien, sed suscipit
                dolor feugiat quis. Donec feugiat mattis urna sit amet sodales.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                posuere, quam eu tempor rutrum, massa ex congue nulla, eu
                fermentum mauris magna quis dolor. Integer ante tortor, commodo
                vitae turpis eu, pretium accumsan purus. Mauris tortor odio,
                pellentesque vel lacinia nec, aliquet ac ante. Sed tempus metus
                elit. In feugiat sapien vitae est accumsan, non sagittis elit
                ornare. In hac habitasse platea dictumst. Vestibulum convallis
                lectus at dolor egestas, ut congue metus consequat. Proin
                condimentum tincidunt mi in egestas. Aenean diam dolor, semper
                non vulputate viverra, tincidunt non tortor. Nulla quis ipsum
                bibendum, commodo sem in, rutrum nulla. Nullam rhoncus ut turpis
                in pulvinar. Suspendisse faucibus arcu sapien, sed suscipit
                dolor feugiat quis. Donec feugiat mattis urna sit amet sodales.
            </p>
            {isOpen && modal}
        </div>
    );
}

export default ModalPage;
