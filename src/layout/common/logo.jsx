import { observer } from 'mobx-react-lite';
import { useContext} from 'react';

import AppRootContext from '../../store/root';

export default observer(() => {
    const { header: { logo }, site: { title } } = useContext(AppRootContext);
    return (
        <a href="/" style={{ backgroundImage: `url(${logo})`}}>{title}</a>
    );
});
