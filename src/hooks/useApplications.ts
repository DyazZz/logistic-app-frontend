import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createApplication,
  deleteApplicationById,
  loadApplicationsBySearchQueryAndFilter,
  updateApplicationById,
} from "../services/apiApplications";
import { Application } from "../CustomTypes";
import { useAppSelector } from "../hooks";
import { useToaster } from "@gravity-ui/uikit";

export default function useApplications(
  setFormStateFunc?: React.Dispatch<React.SetStateAction<boolean>>
) {
  const queryClinet = useQueryClient();

  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const sortValue = useAppSelector((state) => state.search.sort);

  const { add, remove } = useToaster();

  const getApplicationsBySearchQuery = useQuery({
    queryKey: ["applications/get", searchQuery, sortValue],
    queryFn: () =>
      loadApplicationsBySearchQueryAndFilter(searchQuery, sortValue),
  });

  const addApplication = useMutation({
    mutationFn: (data: Application) => createApplication(data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["applications/get"] });
      setFormStateFunc?.(false);
      remove("create/pending");
      add({
        name: "creation/success",
        title: "Заявка создана",
        autoHiding: 1500,
        theme: "success",
      });
    },
    onMutate: () => {
      add({
        name: "create/pending",
        title: "Создаем заявку...",
        theme: "info",
      });
    },
    onError: () => {
      remove("create/pending");
      add({
        name: "creation/error",
        title: "Не удалось создать заявку",
        autoHiding: 5000,
        theme: "danger",
      });
    },
  });

  const updateApplication = useMutation({
    mutationFn: (data: Application) => updateApplicationById(data),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["applications/get"] });
      setFormStateFunc?.(false);
      remove("update/pending");
      add({
        name: "update/success",
        title: "Заявка изменена",
        autoHiding: 1500,
        theme: "success",
      });
    },
    onMutate: () => {
      add({
        name: "update/pending",
        title: "Редактируем заявку...",
        theme: "info",
      });
    },
    onError: () => {
      remove("update/pending");
      add({
        name: "delete/error",
        title: "Не удалось изменить заявку",
        autoHiding: 5000,
        theme: "danger",
      });
    },
  });

  const deleteApplication = useMutation({
    mutationFn: (id: number) => deleteApplicationById(id),
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: ["applications/get"] });
      remove("delete/pending");
      add({
        name: "delete/success",
        title: "Заявка удалена",
        autoHiding: 1500,
        theme: "success",
      });
    },
    onMutate: () => {
      add({
        name: "delete/pending",
        title: "Удаляем заявку...",
        theme: "info",
      });
    },
    onError: () => {
      remove("delete/pending");
      add({
        name: "delete/error",
        title: "Не удалось удалить заявку",
        autoHiding: 5000,
        theme: "danger",
      });
    },
  });

  return {
    addApplication,
    updateApplication,
    deleteApplication,
    getApplicationsBySearchQuery,
  };
}
