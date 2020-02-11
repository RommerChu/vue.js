
/**MANDATORY SETUP**/
import Vue from 'vue'
import Router from 'vue-router'

import userlistings from "./userlistings";
import userform from "./userform";
import userdetails from "./userdetails";

Vue.use(Router)

export default new Router({

    routes:[
        {
            path : "/",
        component : userlistings},
        {
            path : '/create',
            component : userform
        },
        {
            path : '/details',
            component : userdetails
        },
    ]

})
/**MANDATORY SETUP**/