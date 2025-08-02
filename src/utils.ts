// API
import { getByIdReq, getReq } from "./services/apiService";


export async function fetchItems(url:string, setValue:React.Dispatch<React.SetStateAction<any>>) {
  const { data, status } = await getReq(url);
  if (status === 200 || status == 204) {
    setValue(data)
  }
}

export async function fetchItem(url:string, setValue:React.Dispatch<React.SetStateAction<any>>) {
  const { data, status } = await getByIdReq(url);
  if (status === 200) {
    setValue(data)
  }
}


