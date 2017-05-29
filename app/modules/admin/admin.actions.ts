import { Action } from "@ngrx/store";
import * as Immutable from "immutable";

export class FetchAdminMembershipsAction implements Action {
  readonly type = "FETCH_ADMIN_MEMBERSHIPS";

  constructor(public payload: number) { }
}

export class SetAdminMembershipsAction implements Action {
  readonly type = "SET_ADMIN_MEMBERSHIPS";

  constructor(public payload: Immutable.Map<string, any>) { }
}