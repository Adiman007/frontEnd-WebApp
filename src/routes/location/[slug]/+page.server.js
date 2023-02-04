import * as api from '$lib/api.js';
import { error, fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({params,cookies }) {
  if (!cookies){
    throw redirect(404,"/login")
  }
  let token = cookies.get('jwt')
  const location = await api.get(`locations/${params.slug}`,token)
  const user = await api.get('users/me',token)
  return {location,user};
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete_location: async ({params,cookies}) => {
    let token = cookies.get('jwt')
    await api.del(`locations/${params.slug}`,token)
    throw redirect(302,"/locations")
  },
  modify_location: async ({cookies, request,params }) => {
    const oldLocation= await api.get(`locations/${params.slug}`,cookies.get('jwt'))
    const oldLoc=oldLocation.location
    const data = await request.formData();
    let filmName=data.get('filmName')
    if(filmName==""){
      filmName=oldLoc.filmName
    }
    let filmType=data.get('filmType')
    if(filmType==""){
      filmType=oldLoc.filmType
    }
    let year=data.get('year')
    if(year==""){
      year=oldLoc.year
    }
    let address=data.get('address')
    if(address==""){
      address=oldLoc.address
    }
    let district=data.get('district')
    if(district==""){
      district=oldLoc.district
    }
    let sourceLocationId=data.get('sourceLocationId')
    if(sourceLocationId==""){
      sourceLocationId=oldLoc.sourceLocationId
    }
    let filmDirectorName=data.get('filmDirectorName')
    if(filmDirectorName==""){
      filmDirectorName=oldLoc.filmDirectorName
    }
    let filmProducerName=data.get('filmProducerName')
    if(filmProducerName==""){
      filmProducerName=oldLoc.filmProducerName
    }
    let startDate=data.get('startDate')
    if(startDate==""){
      startDate=oldLoc.startDate
    }
    let endDate=data.get('endDate')
    if(endDate==""){
      endDate=oldLoc.endDate
    }
    const location = {
      filmName: filmName,
      filmType:filmType ,
      year:year ,
      address: address,
      district: district,
      sourceLocationId: sourceLocationId,
      filmDirectorName: filmDirectorName,
      filmProducerName: filmProducerName,
      startDate: startDate,
      endDate: endDate,
    };
    if(!location){ throw redirect(401,"/locations")}
    if(!cookies){ throw redirect(401,"/locations")}
    const token = cookies.get("jwt")
    const res = await api.patch(`locations/${oldLoc._id}`, location,token);
    if (res.location) {
      return
    }
    throw redirect(401,"/locations");
  },

};