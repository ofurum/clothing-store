import { createSelector } from "reselect";


const listOfSections = state => state.directory

export const selectDirectorySection = createSelector(
  [listOfSections],
  directory => directory.sections
)