/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkstations = /* GraphQL */ `
  query GetWorkstations($stationId: String!) {
    getWorkstations(stationId: $stationId) {
      cycleTime
      cycleTimeDelay
      defectCount
      description
      displayName
      equipmentNumber
      isOeeCalculable
      plantIndex
      productionCount
      runningTime
      stationId
    }
  }
`;
export const listWorkstations = /* GraphQL */ `
  query ListWorkstations(
    $filter: TableWorkstationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkstations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cycleTime
        cycleTimeDelay
        defectCount
        description
        displayName
        equipmentNumber
        isOeeCalculable
        plantIndex
        productionCount
        runningTime
        stationId
      }
      nextToken
    }
  }
`;
