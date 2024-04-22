import { store } from "./store";

export type Application = {
  id: number;
  applicationUID: string;
  date: string;
  companyName: string;
  driverName: string;
  driverPhone: string;
  comment: string;
  status: number;
  ATI: string;
};

export enum ApplicationStatus {
  NEW = 1,
  IN_PROGRESS = 2,
  COMPLETED = 3,
}

export type RootState = ReturnType<typeof store.getState>;
