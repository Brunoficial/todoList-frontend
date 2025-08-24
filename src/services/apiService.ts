import type { AxiosResponse } from "axios";
import api from "./api";

export async function getReq(url: string): Promise<AxiosResponse> {
    const response = await api.get(url);
    return response;
}

// This url needs an Id as a parameter
export async function getByIdReq(url: string): Promise<AxiosResponse> {
    const response = await api.get(url);
    return response;
}

export async function createReq<T>(
  url: string,
  data: T
): Promise<AxiosResponse> {
    const response = await api.post(url, data);
    return response;
}

// This url needs to have Id as a parameter
export async function deleteReq(url: string): Promise<AxiosResponse> {
    const response = await api.delete(url);
    return response;
}

// This url needs to have Id as a parameter
export async function updateReq<T>(
  url: string,
  data: T
): Promise<AxiosResponse> {
    const response = await api.patch(url, data);
    return response;
}
