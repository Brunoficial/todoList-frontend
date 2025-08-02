// API
import { getByIdReq, getReq } from "./services/apiService";


export async function fetchItems<T>(url:string, setValue:React.Dispatch<React.SetStateAction<T>>) {
  const { data, status } = await getReq(url);
  if (status === 200 || status == 204) {
    setValue(data)
  }
}

export async function fetchItem<T>(url:string, setValue:React.Dispatch<React.SetStateAction<T | null>>) {
  const { data, status } = await getByIdReq(url);
  if (status === 200) {
    setValue(data)
  }
}


