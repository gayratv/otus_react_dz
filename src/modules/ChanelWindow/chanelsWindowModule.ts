import { reducer } from "./chanelsWindowReducer";
import { GlobalWindowClickSaga } from "./chanelsWindowSaga";
import {
  cnahelWindow_STOP_SAGA,
  cnahelWindow_START_SAGA,
  InitWindowState,
} from "@/modules/ChanelWindow/chanelsWindowReducer";
import { IModule } from "redux-dynamic-modules";
import { ISagaModule } from "redux-dynamic-modules-saga";
import * as thunk from "redux-thunk";
import { put } from "redux-saga/effects";
import * as wind from "@/modules/ChanelWindow/chanelsWindowReducer";

function cancelWindowSaga() {
  return (dispatch: any, getState: any) => {
    dispatch(cnahelWindow_STOP_SAGA());
  };
}

// return (dispatch: thunk.ThunkDispatch<any, any, any>, getState: any) => {
function startWindowSaga() {
  return (dispatch: any, getState: any) => {
    dispatch(InitWindowState());
    dispatch(cnahelWindow_START_SAGA());
  };
}

// any - тип локального state
export function getCahnelsWindowModule(): ISagaModule<typeof reducer> {
  return {
    // Unique id of the module
    id: "hacker-news",
    // Maps the Store key to the reducer
    reducerMap: {
      chanelWindowState: reducer,
    },
    // если Saga с параметром - то пишется так:
    // { saga: usersSagaWithArguments, argument: { a: "argument" } },
    sagas: [GlobalWindowClickSaga],
    // Optional: Any actions to dispatch when the module is loaded

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    initialActions: [startWindowSaga()],
    // Optional: Any actions to dispatch when the module is unloaded
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    finalActions: [cancelWindowSaga()],
  };
}
