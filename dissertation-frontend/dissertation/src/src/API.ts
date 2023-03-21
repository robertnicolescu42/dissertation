/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWorkstationsInput = {
  cycleTime: number,
  cycleTimeDelay: number,
  defectCount: number,
  description?: string | null,
  displayName: string,
  equipmentNumber: string,
  isOeeCalculable: boolean,
  plantIndex: string,
  productionCount: number,
  runningTime: number,
  stationId: string,
};

export type Workstations = {
  __typename: "Workstations",
  cycleTime: number,
  cycleTimeDelay: number,
  defectCount: number,
  description?: string | null,
  displayName: string,
  equipmentNumber: string,
  isOeeCalculable: boolean,
  plantIndex: string,
  productionCount: number,
  runningTime: number,
  stationId: string,
};

export type DeleteWorkstationsInput = {
  stationId: string,
};

export type UpdateWorkstationsInput = {
  cycleTime?: number | null,
  cycleTimeDelay?: number | null,
  defectCount?: number | null,
  description?: string | null,
  displayName?: string | null,
  equipmentNumber?: string | null,
  isOeeCalculable?: boolean | null,
  plantIndex?: string | null,
  productionCount?: number | null,
  runningTime?: number | null,
  stationId: string,
};

export type TableWorkstationsFilterInput = {
  cycleTime?: TableIntFilterInput | null,
  cycleTimeDelay?: TableIntFilterInput | null,
  defectCount?: TableIntFilterInput | null,
  description?: TableStringFilterInput | null,
  displayName?: TableStringFilterInput | null,
  equipmentNumber?: TableStringFilterInput | null,
  isOeeCalculable?: TableBooleanFilterInput | null,
  plantIndex?: TableStringFilterInput | null,
  productionCount?: TableIntFilterInput | null,
  runningTime?: TableIntFilterInput | null,
  stationId?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  between?: Array< number | null > | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type WorkstationsConnection = {
  __typename: "WorkstationsConnection",
  items?:  Array<Workstations | null > | null,
  nextToken?: string | null,
};

export type CreateWorkstationsMutationVariables = {
  input: CreateWorkstationsInput,
};

export type CreateWorkstationsMutation = {
  createWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type DeleteWorkstationsMutationVariables = {
  input: DeleteWorkstationsInput,
};

export type DeleteWorkstationsMutation = {
  deleteWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type UpdateWorkstationsMutationVariables = {
  input: UpdateWorkstationsInput,
};

export type UpdateWorkstationsMutation = {
  updateWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type GetWorkstationsQueryVariables = {
  stationId: string,
};

export type GetWorkstationsQuery = {
  getWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type ListWorkstationsQueryVariables = {
  filter?: TableWorkstationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkstationsQuery = {
  listWorkstations?:  {
    __typename: "WorkstationsConnection",
    items?:  Array< {
      __typename: "Workstations",
      cycleTime: number,
      cycleTimeDelay: number,
      defectCount: number,
      description?: string | null,
      displayName: string,
      equipmentNumber: string,
      isOeeCalculable: boolean,
      plantIndex: string,
      productionCount: number,
      runningTime: number,
      stationId: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWorkstationsSubscriptionVariables = {
  cycleTime?: number | null,
  cycleTimeDelay?: number | null,
  defectCount?: number | null,
  description?: string | null,
  stationId?: string | null,
};

export type OnCreateWorkstationsSubscription = {
  onCreateWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type OnDeleteWorkstationsSubscriptionVariables = {
  cycleTime?: number | null,
  cycleTimeDelay?: number | null,
  defectCount?: number | null,
  description?: string | null,
  stationId?: string | null,
};

export type OnDeleteWorkstationsSubscription = {
  onDeleteWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};

export type OnUpdateWorkstationsSubscriptionVariables = {
  cycleTime?: number | null,
  cycleTimeDelay?: number | null,
  defectCount?: number | null,
  description?: string | null,
  stationId?: string | null,
};

export type OnUpdateWorkstationsSubscription = {
  onUpdateWorkstations?:  {
    __typename: "Workstations",
    cycleTime: number,
    cycleTimeDelay: number,
    defectCount: number,
    description?: string | null,
    displayName: string,
    equipmentNumber: string,
    isOeeCalculable: boolean,
    plantIndex: string,
    productionCount: number,
    runningTime: number,
    stationId: string,
  } | null,
};
