import { createSelector } from "@reduxjs/toolkit"
import { AppState } from ".."
import { IGlobalReducer } from "./types"

const getGlobalState = (state: AppState) => state.global

const getTheme = (state: IGlobalReducer) => state.themeMode

export const selectGlobalState = createSelector(getGlobalState, getTheme)