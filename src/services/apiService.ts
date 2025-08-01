import type { TaskType } from "../App";
import api from "./api";


export async function getReq(url:string) {

  try {
    const response = await api.get(url);
    return response.data

  } catch (error) {
    return error;
  }
}

export async function createReq(url:string, data:TaskType) {

  try {
    const response = await api.post(url, {
      title: data.title,
      description: data.description,
    });

    return response;

  } catch (error) {
    return error;
  }
}

// Precisa ter o parâmetro Id nessa url 
export async function deleteReq(url:string) {

  try {
    const response = await api.delete(url)
    return response

  } catch (error) { 
      return error
  }
}

// Precisa ter o parâmetro Id nessa url 
export async function updateReq(url:string, data:TaskType) {

  try {
    const response = await api.patch(url, {
      title: data.title,
      description: data.description,
      concluded: data.concluded
    })

    return response

  } catch(error) {
    return error
  }
}
