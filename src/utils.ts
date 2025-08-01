// API
import { getReq } from "./services/apiService";

export async function fetchTasks() {
  const data = await getReq("tasks/list");
  return data;
}


