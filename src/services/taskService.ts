import type { TaskType } from "../App";
import api from "./api";



export async function getTasks() {
  try {
    const response = await api.get("/tasks/list");
    console.log(response);

    return response.data

  } catch (error) {
    console.log(error);

    return error;
  }
}

export async function createTask(data:TaskType) {
  try {
    const createdTask = await api.post("/tasks/create", {
      title: data.title,
      description: data.description,
    });

    return createdTask;

  } catch (error) {
    console.log(error)

    return error;
  }
}

export async function deleteTask(id: number) {
  try {
    const response = await api.delete(`/tasks/delete/${id}`)
    console.log(response)

  } catch (error) { 
    console.log(error)
  }
}

export async function updateTask(id: number, data:TaskType) {
  try {
    const updatedTask = await api.patch(`/tasks/delete/${id}`, {
      title: data.title,
      description: data.description,
      concluded: data.concluded
    })

    console.log(updatedTask)
  } catch(error) {
    console.log(error)
  }
}
