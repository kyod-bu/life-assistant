import { observer } from 'mobx-react-lite';

import Logo from './logo';

export default observer(() => {
    // const { children } = props;
    return (
        <div>
            <Logo />
            headerMenu
            <div>
                rightLinks
                headerUser
            </div>
        </div>
    );
});
