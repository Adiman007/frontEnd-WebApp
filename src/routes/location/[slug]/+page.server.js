import * as api from '$lib/../../../lib/api';
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({cookies,params }) {
  console.log("COUCOU")
  if (!cookies.jwt){
    return fail(401);
  }
  if (!cookies.loc){
    return fail(401);
  }
  console.log(params.slug)
  let token = cookies.get('jwt')
  const location = await api.get(`locations/${params.slug}`,token)
  console.log(location)
  return location;
}

/** @type {import('./$types').Actions} */
export const actions = {


};