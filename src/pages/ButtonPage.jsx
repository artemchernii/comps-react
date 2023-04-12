import Button from '../components/Button';
import { FaBeer } from 'react-icons/fa';
import { GoBell, GoDeviceCameraVideo } from 'react-icons/go';

function ButtonPage() {
    return (
        <div>
            <h3>Buttons: </h3>
            <div className="buttons flex justify-center">
                <Button primary rounded onClick={onClick}>
                    <GoDeviceCameraVideo />
                    Some text
                </Button>
                <Button danger>Some text</Button>
                <Button warning>Some text</Button>
                <Button secondary outline rounded>
                    <GoBell /> Some text
                </Button>
                <Button success>
                    Success <FaBeer />
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
