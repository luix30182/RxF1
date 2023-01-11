export interface DriversResponse {
  MRData: {
    DriverTable: {
      Drivers: Driver[];
    };
    limit: string;
    offset: string;
    total: string;
  };
}

export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
}

export interface RaceResponse {
  MRData: {
    RaceTable: {
      season: string;
      Races: RaceElement[];
    };
    limit: string;
    offset: string;
    total: string;
  };
}

export interface RaceElement {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  finalResult: any;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface ResultsResponse {
  MRData: {
    RaceTable: {
      season: string;
      round: string;
      Races: Race[];
    };
    limit: string;
    offset: string;
    total: string;
  };
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results?: Result[];
  QualifyingResults?: QualifyingResult[];
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: ResultTime;
  FastestLap: FastestLap;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: FastestLapTime;
  AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

export interface FastestLapTime {
  time: string;
}

export interface ResultTime {
  millis: string;
  time: string;
}

export interface QualifyingResults {
  MRData: {
    RaceTable: {
      season: string;
      round: string;
      Races: Race[];
    };
    limit: string;
    offset: string;
    total: string;
  };
}

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2?: string;
  Q3?: string;
}

export interface DriverStandingsResult {
  MRData: {
    StandingsTable: {
      season: string;
      round: string;
      StandingsLists: StandingsList[];
    };
    limit: string;
    offset: string;
    total: string;
  };
}

export interface StandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
