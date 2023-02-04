import * as api from '$lib/api.js';
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies }) {
    if (!cookies){
        return fail(401);
    }
    let token = cookies.get('jwt')
    const locations = await api.get('locations',token)
    const user = await api.get('users/me',token)
    return {locations,user};
}

/** @type {import('./$types').Actions} */
export const actions = {
    disconnect: async () => {
        throw redirect(307,"/login")
    },
    add_location: async ({cookies, request }) => {
        const data = await request.formData();
        const location = {
            filmName: data.get('filmName'),
            filmType: data.get('filmType'),
            year: data.get('year'),
            address: data.get('address'),
            district: data.get('district'),
            sourceLocationId: data.get('sourceLocationId'),
            filmDirectorName: data.get('filmDirectorName'),
            filmProducerName: data.get('filmProducerName'),
            startDate: data.get('startDate'),
            endDate: data.get('endDate'),
        };
        if(!location){ throw redirect(401,"/locations")}
        if(!cookies){ throw redirect(401,"/locations")}
        const token = cookies.get("jwt")
        const res = await api.post('locations', location,token);
        if (res.location) {
            throw redirect(307, `/locations`);
        }
        throw redirect(401,"/locations");
    },
};