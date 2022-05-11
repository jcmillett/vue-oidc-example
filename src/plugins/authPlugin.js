import { UserManager } from 'oidc-client-ts';

export default {
    install(Vue) {
        const userManager = new UserManager({
            authority: process.env.VUE_APP_OIDC_AUTHORITY,
            client_id: process.env.VUE_APP_OIDC_CLIENT_ID,
            redirect_uri: process.env.VUE_APP_OIDC_REDIRECT_URI
        });

        Vue.prototype.$auth = { userManager };
    }
};