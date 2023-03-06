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
    return this.cities.find((city) => city.abbreviation === abbreviation);
  }
  generateWorkstation(): Workstation {
    let { stationId, description } =
      this.generateWorkstationNameAndDescription();

    let productionCount = Math.floor(Math.random() * 100);
    return {
      stationId: stationId,
      displayName: `Workstation ${Math.floor(Math.random() * 100)}`,
      isConsiderScrapForOee: Math.random() >= 0.5,
      equipmentNumber: Math.random().toString(36).substring(2, 15),
      isOeeCalculable: Math.random() >= 0.5,
      // isOeeCalculable: true,
      isSendingQualityRate: Math.random() >= 0.5,
      cycleTime: Math.floor(Math.random() * 1000),
      cycleTimeDelay: Math.floor(Math.random() * 100),
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
      runningTime: Math.floor(Math.random() * 100),
      productionCount: productionCount,
      defectCount: Math.floor(Math.random() * (productionCount - 0 + 1)),
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
  // as fast as possible, with no Stop Time. In the language of OEE that
  // means 100 % Quality(only Good Parts), 100 % Performance(as fast as possible),
  // and 100 % Availability(no Stop Time).
  /**
   * Calculates the OEE for a given workstation based on its properties
   * @param workstation The workstation object to calculate OEE for
   * @returns An object containing the availability, performance, and quality
   */
  calculateOEE(workstation: Workstation): OEE {
    // Calculate performance as the percentage of ideal cycle time achieved by the workstation
    const performance =
      ((workstation.cycleTime * workstation.productionCount) /
        (workstation.runningTime - workstation.cycleTimeDelay)) %
      100;

    // Calculate quality as the percentage of parts produced that were not defective
    const quality =
      ((workstation.productionCount - workstation.defectCount) /
        workstation.productionCount) *
      100;

    // Calculate availability as the percentage of time the workstation was available for production
    const availability =
      ((workstation.runningTime - workstation.cycleTimeDelay) /
        workstation.runningTime) *
      100;

    // Calculate OEE as the product of availability, performance, and quality
    const oee = (availability * performance * quality) % 100;

    // Return an object containing the availability, performance, and quality
    let oeeObject: OEE = {
      availability: Math.abs(parseFloat(availability.toFixed(2))),
      performance: Math.abs(parseFloat(performance.toFixed(2))),
      quality: Math.abs(parseFloat(quality.toFixed(2))),
      oee: Math.abs(parseFloat(oee.toFixed(2))),
    };

    return oeeObject;
  }

  generatePartialFeedbacksData(): {
    title: string;
    total: number;
    lastResult: boolean;
    lastId: string;
    lastTime: Date;
    rate: number;
  } {
    const title: string = 'n/a';
    const total: number = Math.floor(Math.random() * 100);
    const lastResult: boolean = false;

    // Generate lastId
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id: string = '';
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    id += '-';
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    id = id.toUpperCase();

    // Generate lastTime
    const now: Date = new Date();
    const weekday: number = now.getDay();
    let daysAgo: number = 0;
    switch (weekday) {
      case 0: // Sunday
      case 6: // Saturday
        daysAgo = weekday - 5;
        break;
      default:
        daysAgo = weekday - 1;
        break;
    }
    const lastTime: Date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - daysAgo,
      8 + Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60),
      0
    );

    const rate: number = +(Math.random() * 100).toFixed(2);

    return {
      title,
      total,
      lastResult,
      lastId: id,
      lastTime,
      rate,
    };
  }

  generateFeedbackData() {
    let okFeedbacks = {
      title: 'n/a',
      total: 0,
      lastResult: false,
      lastId: 'n/a',
      lastTime: new Date(),
      rate: 0,
    };

    let nokFeedbacks = {
      title: 'n/a',
      total: 0,
      lastResult: false,
      lastId: 'n/a',
      lastTime: new Date(),
      rate: 0,
    };

    let scrapFeedbacks = {
      title: 'n/a',
      total: 0,
      lastResult: false,
      lastId: 'n/a',
      lastTime: new Date(),
      rate: 0,
    };

    // Generate data for okFeedbacks
    const okCount = Math.floor(Math.random() * 10);
    for (let i = 0; i < okCount; i++) {
      const data: any = this.generatePartialFeedbacksData();
      okFeedbacks = data;
      okFeedbacks.total += data.total;
    }

    // Generate data for nokFeedbacks
    const nokCount = Math.floor(Math.random() * 10);
    for (let i = 0; i < nokCount; i++) {
      const data = this.generatePartialFeedbacksData();
      nokFeedbacks = data;
      nokFeedbacks.total += data.total;
    }
    // Generate data for scrapFeedbacks
    const scrapCount = Math.floor(Math.random() * 10);
    for (let i = 0; i < scrapCount; i++) {
      const data = this.generatePartialFeedbacksData();
      scrapFeedbacks = data;
      scrapFeedbacks.total += data.total;
    }

    // Calculate the total
    const total = okFeedbacks.total + nokFeedbacks.total + scrapFeedbacks.total;

    okFeedbacks.rate = Number(((okFeedbacks.total / total) * 100).toFixed(2));
    nokFeedbacks.rate = Number(((nokFeedbacks.total / total) * 100).toFixed(2));
    scrapFeedbacks.rate = Number(
      ((scrapFeedbacks.total / total) * 100).toFixed(2)
    );

    // Find the most recent feedback
    let mostRecent = new Date(0);
    let mostRecentFeedback: any;
    [okFeedbacks, nokFeedbacks, scrapFeedbacks].forEach((feedback) => {
      if (feedback.lastTime > mostRecent) {
        mostRecent = feedback.lastTime;
        mostRecentFeedback = feedback;
      }
    });

    // Build the completeFeedbacks object
    if (mostRecentFeedback.lastId === okFeedbacks.lastId) {
      mostRecentFeedback.lastResult = true;
    } else {
      mostRecentFeedback.lastResult = false;
    }
    const completeFeedbacks = {
      total,
      lastResult: mostRecentFeedback.lastResult,
      lastId: mostRecentFeedback.lastId,
      lastTime: mostRecentFeedback.lastTime,
    };

    return { okFeedbacks, nokFeedbacks, scrapFeedbacks, completeFeedbacks };
  }
}
