import { Application } from "../CustomTypes";

const API_URL = "http://localhost:3000";

export async function loadApplicationsBySearchQueryAndFilter(
  searchQuery: string,
  filter: string
): Promise<Application[]> {
  if (filter === "id") filter = "";
  //если фильтрация выставлена по id, то обнуялем ее, по скольку данные с бека
  //изначально приходят отфильтрованными по id и сортировать их заново не имеет смысла

  const res = await fetch(
    `${API_URL}/applications?search=${searchQuery}&sort=${filter}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) throw Error("Failed to search");
  const data = await res.json();
  return data;
}

export async function createApplication(
  application: Application
): Promise<Application> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...newApplication } = application; //Удаляем поле id, т.к. оно не должно быть в объекте

  const res = await fetch(`${API_URL}/applications`, {
    method: "POST",
    body: JSON.stringify(newApplication),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw Error("Failed to create application");
  const data = await res.json();
  return data;
}

export async function updateApplicationById(
  application: Application
): Promise<Application> {
  const { id, ...updateApplication } = application;

  const res = await fetch(`${API_URL}/applications/${id}`, {
    method: "PATCH",
    body: JSON.stringify(updateApplication),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw Error("Failed to update application");
  const data = await res.json();
  return data;
}

export async function deleteApplicationById(id: number): Promise<Application> {
  const res = await fetch(`${API_URL}/applications/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw Error("Failed to delete application");
  const data = await res.json();
  return data;
}
