import * as api from '$lib/api.js';
import { error, fail, redirect } from "@sveltejs/kit";
import { createLogger } from "vite";

/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    throw redirect(307, '/login');
}

/** @type {import('./$types').Actions} */
export const actions = {

};