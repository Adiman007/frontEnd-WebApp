import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({params,cookies }) {
    if (cookies) {
        cookies.delete("jwt")
    }
}
/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();
        const user = {
            username: data.get('username'),
            password: data.get('password')
        };
        if(!user){ return fail(401, user);}
        const res = await api.post('users/login', user);
        if (res.token) {
            cookies.set('jwt', res.token, { path: '/' });
            throw redirect(307, '/locations');
        }
        return fail(401, user);

    }
};