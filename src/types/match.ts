// src/types/match.ts

export interface Match {
    id: number;
    date: Date;
    league: League;
    homeTeam: Team;
    awayTeam: Team;
    homeScore: number;
    awayScore: number;
    statistics: MatchStatistic;
    lineup: Lineup;
    prediction: Prediction;
}

export interface Team {
    id: number;
    name: string;
    coach: string;
    players: Player[];
}

export interface League {
    id: number;
    name: string;
    country: string;
}

export interface MatchStatistic {
    possession: { [key: string]: number };
    shots: { [key: string]: number };
    corners: { [key: string]: number };
    cards: { [key: string]: number };
}

export interface Prediction {
    matchId: number;
    predictedWinner: string;
    confidenceLevel: number;
}

export interface Lineup {
    homeTeam: Player[];
    awayTeam: Player[];
}

export interface Player {
    id: number;
    name: string;
    position: string;
    age: number;
}

export interface BettingOdds {
    matchId: number;
    odds: { [key: string]: number };
}
