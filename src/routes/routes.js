import Home from '../pages/Home/Home';
import Calc from '../pages/Calc/Calc';
import Sample from '../pages/Sample/Sample';
import Info from '../pages/Info/Info';

const routes = {
    home: {
        url: '/',
        component: Home,
    },
    calc: {
        url: '/calc',
        component: Calc,
    },
    sample: {
        url: '/sample',
        component: Sample,
    },
    info: {
        url: '/info',
        component: Info,
    },
};

export default routes;
