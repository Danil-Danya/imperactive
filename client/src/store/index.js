import { createStore } from 'vuex';

import fisicsFaq from './fisics-faq/fisics-faq.js';
import yuristicFaq from './yuristic-faq/yuristic-faq.js';
import comments from './comments/comments.js';


export default createStore({
    modules: {
        fisicsFaq,
        yuristicFaq,
        comments
    }
})
