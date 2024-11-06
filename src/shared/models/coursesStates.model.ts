import { Module } from "./module.model";

export interface dataFiltred {
  id: number;
  moduleName: string;
  minutes: number;
  hexColor: string;
  courseName: string;
}

export interface ICoursesStates {
  searchText: string;
  selectedModule: Module;
  selectedCourse: string;
  dataFiltred: dataFiltred[];
}
