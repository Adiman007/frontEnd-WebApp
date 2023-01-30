import * as api from '$lib/api.js';
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies }) {
    if (!cookies){
        return fail(401);
    }
    let token = cookies.get('jwt')
    const locations = await api.get('/locations',token)
    return { locations };
}

/** @type {import('./$types').Actions} */
export const actions = {

};