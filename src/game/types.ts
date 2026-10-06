export const SUITS=["clubs","diamonds","hearts","spades"] as const;
export const RANKS=["7","8","9","J","Q","K","10","A"] as const;
export type Suit=typeof SUITS[number];
export type Rank=typeof RANKS[number];
export type TeamId="A"|"B";
export type Seat=0|1|2|3;
export interface Card{suit:Suit;rank:Rank}
export interface TeamState{bil:number;bolts:number}
