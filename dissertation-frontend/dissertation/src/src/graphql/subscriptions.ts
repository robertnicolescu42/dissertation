/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkstations = /* GraphQL */ `
  subscription OnCreateWorkstations(
    $cycleTime: Int
    $cycleTimeDelay: Int
    $defectCount: Int
    $description: String
    $stationId: String
  ) {
    onCreateWorkstations(
      cycleTime: $cycleTime
      cycleTimeDelay: $cycleTimeDelay
      defectCount: $defectCount
      description: $description
      stationId: $stationId
    ) {
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
export const onDeleteWorkstations = /* GraphQL */ `
  subscription OnDeleteWorkstations(
    $cycleTime: Int
    $cycleTimeDelay: Int
    $defectCount: Int
    $description: String
    $stationId: String
  ) {
    onDeleteWorkstations(
      cycleTime: $cycleTime
      cycleTimeDelay: $cycleTimeDelay
      defectCount: $defectCount
      description: $description
      stationId: $stationId
    ) {
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
export const onUpdateWorkstations = /* GraphQL */ `
  subscription OnUpdateWorkstations(
    $cycleTime: Int
    $cycleTimeDelay: Int
    $defectCount: Int
    $description: String
    $stationId: String
  ) {
    onUpdateWorkstations(
      cycleTime: $cycleTime
      cycleTimeDelay: $cycleTimeDelay
      defectCount: $defectCount
      description: $description
      stationId: $stationId
    ) {
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
