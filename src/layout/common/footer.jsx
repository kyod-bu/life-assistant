import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import AppRootContext from '../../store/root';

export default observer(() => {
    const { footer } = useContext(AppRootContext);
    return (
        <div>
            { footer.text }
        </div>
    );
});
