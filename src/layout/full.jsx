import { observer } from 'mobx-react-lite';

import Header from './common/header';
import Footer from './common/footer';

export default observer((props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    );
});
