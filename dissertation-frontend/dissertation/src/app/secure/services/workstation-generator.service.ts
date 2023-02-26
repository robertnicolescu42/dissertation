import { Injectable } from '@angular/core';
import { Workstation } from '../../types/work-station';
import { OEE } from '../../types/oee';

@Injectable({
  providedIn: 'root',
})
export class WorkstationGeneratorService {
  constructor() {}

  cities: { abbreviation: string; name: string; country: string }[] = [
    { abbreviation: 'NYC', name: 'New York City', country: 'United States' }, // NYC - New York City, United States
    { abbreviation: 'LON', name: 'London', country: 'United Kingdom' }, // LON - London, United Kingdom
    { abbreviation: 'PAR', name: 'Paris', country: 'France' }, // PAR - Paris, France
    { abbreviation: 'TOK', name: 'Tokyo', country: 'Japan' }, // TOK - Tokyo, Japan
    { abbreviation: 'BJJ', name: 'Beijing', country: 'China' }, // BJJ - Beijing, China
    { abbreviation: 'PIT', name: 'Pitesti', country: 'Romania' }, // PIT - Pitești, România
    { abbreviation: 'CAI', name: 'Cairo', country: 'Egypt' }, // CAI - Cairo, Egypt
    { abbreviation: 'SAO', name: 'São Paulo', country: 'Brazil' }, // SAO - São Paulo, Brazil
    { abbreviation: 'IST', name: 'Istanbul', country: 'Turkey' }, // IST - Istanbul, Turkey
    { abbreviation: 'JNB', name: 'Johannesburg', country: 'South Africa' }, // JNB - Johannesburg, South Africa
  ];

  getCityByAbbreviation(
    abbreviation: string
  ): { abbreviation: string; name: string; country: string } | undefined {
    // Find the city object with the matching abbreviation, or return undefined if not found
    console.log(abbreviation);
    return this.cities.find((city) => city.abbreviation === abbreviation);
  }
  generateWorkstation(): Workstation {
    let { stationId, description } =
      this.generateWorkstationNameAndDescription();
    return {
      stationId: stationId,
      displayName: `Workstation ${Math.floor(Math.random() * 100)}`,
      isConsiderScrapForOee: Math.random() >= 0.5,
      equipmentNumber: Math.random().toString(36).substring(2, 15),
      isOeeCalculable: Math.random() >= 0.5,
      isSendingQualityRate: Math.random() >= 0.5,
      cycleTime: Math.floor(Math.random() * 1000),
      cycleTimeDelay: Math.floor(Math.random() * 1000),
      description: description,
      plantIndex:
        this.cities[Math.floor(Math.random() * this.cities.length)]
          .abbreviation,
      isStatusSynthetical: Math.random() >= 0.5,
      isUsingQmetric: Math.random() >= 0.5,
      isPredictiveMaintenanceDisplayed: Math.random() >= 0.5,
      isStationMonitorDisplayed: Math.random() >= 0.5,
      isProcessTimesDisplayed: Math.random() >= 0.5,
      isShowStatusOnly: Math.random() >= 0.5,
      stationMonitorYellow: Math.floor(Math.random() * 1000),
      stationMonitorRed: Math.floor(Math.random() * 1000),
      runningTime: Math.floor(Math.random() * 1000),
      productionCount: Math.floor(Math.random() * 1000),
      defectCount: Math.floor(Math.random() * 1000),
    };
  }

  generateWorkstations(number: number): Workstation[] {
    const workstations: Workstation[] = [];
    for (let i = 0; i < number; i++) {
      workstations.push(this.generateWorkstation());
    }
    return workstations;
  }

  generateWorkstationNameAndDescription(): {
    stationId: string;
    description: string;
  } {
    // List of potential words to use in workstation names
    const words = [
      'precision',
      'engine',
      'assembly',
      'robotics',
      'fabrication',
      'mechanics',
      'production',
      'quality',
      'machining',
      'innovation',
      'automation',
      'design',
      'manufacturing',
    ];

    // Generate a random name by combining two randomly selected words from the list
    const firstWordIndex = Math.floor(Math.random() * words.length);
    let secondWordIndex = Math.floor(Math.random() * words.length);

    // Make sure the second word is different from the first
    while (secondWordIndex === firstWordIndex) {
      secondWordIndex = Math.floor(Math.random() * words.length);
    }

    const firstName = words[firstWordIndex];
    const secondName = words[secondWordIndex];

    // Construct the stationId by concatenating the two words with an underscore in between
    const stationId = `${firstName}_${secondName}`;

    // Construct the description by adding a short phrase describing the function of the workstation
    let description = '';
    switch (secondName) {
      case 'precision':
        description = 'Creates precise parts';
        break;
      case 'engine':
        description = 'Builds engines';
        break;
      case 'assembly':
        description = 'Assembles auto parts';
        break;
      case 'robotics':
        description = 'Uses robots to make auto parts';
        break;
      case 'fabrication':
        description = 'Fabricates auto parts';
        break;
      case 'mechanics':
        description = 'Performs mechanical work';
        break;
      case 'production':
        description = 'Produces auto parts';
        break;
      case 'quality':
        description = 'Ensures quality of auto parts';
        break;
      case 'machining':
        description = 'Machines auto parts';
        break;
      case 'innovation':
        description = 'Develops innovative auto parts';
        break;
      case 'automation':
        description = 'Automates production of auto parts';
        break;
      case 'design':
        description = 'Designs auto parts';
        break;
      case 'manufacturing':
        description = 'Manufactures auto parts';
        break;
      default:
        description = 'Performs a specific function';
        break;
    }

    return {
      stationId: stationId,
      description: description,
    };
  }

  // OEE(Overall Equipment Effectiveness) is the gold standard for
  // measuring manufacturing productivity.Simply put – it identifies
  // the percentage of manufacturing time that is truly productive.
  // An OEE score of 100 % means you are manufacturing only Good Parts,
  // as fast as possible, with no Stop Time.In the language of OEE that
  // means 100 % Quality(only Good Parts), 100 % Performance(as fast as possible),
  // and 100 % Availability(no Stop Time).
  /**
   * Calculates the OEE for a given workstation based on its properties
   * @param workstation The workstation object to calculate OEE for
   * @returns An object containing the availability, performance, and quality
   */
  calculateOEE(workstation: Workstation): OEE {
    // Calculate availability as the percentage of time the workstation was available for production
    const availability =
      (workstation.runningTime - workstation.cycleTimeDelay) /
      workstation.runningTime;

    // Calculate performance as the percentage of ideal cycle time achieved by the workstation
    const performance =
      (workstation.cycleTime * workstation.productionCount) /
      (workstation.runningTime - workstation.cycleTimeDelay);

    // Calculate quality as the percentage of parts produced that were not defective
    const quality =
      (workstation.productionCount - workstation.defectCount) /
      workstation.productionCount;

    // Calculate OEE as the product of availability, performance, and quality
    const oee = availability * performance * quality;

    // Return an object containing the availability, performance, and quality
    let oeeObject: OEE = {
      availability: availability,
      performance: performance,
      quality: quality,
    };

    return oeeObject;
  }
}
