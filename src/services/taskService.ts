import api from "./api";

export async function getTasks() {
  try {
    const response = await api.get("/tasks/list");
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }
}
