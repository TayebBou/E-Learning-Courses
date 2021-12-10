import { Module } from './module.model'

export interface dataFiltred {
    id: number
    moduleName: string
    minutes: number
    hexColor: string
    matter: string
}

export interface ICoursesStates {
  searchText: string
  selectedModule: Module
  dataFiltred: dataFiltred[]
}
