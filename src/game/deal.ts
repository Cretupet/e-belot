import{Card,Seat,Suit}from"./types";
export interface DealResult{hands:Record<Seat,Card[]>;faceUp:Card;remaining:Card[]}
const seats:Seat[]=[0,1,2,3];const next=(s:Seat)=>((s+1)%4)as Seat;
export function dealFive(deck:Card[],dealer:Seat):DealResult{if(deck.length!==32)throw Error("Expected 32 cards");const hands={0:[],1:[],2:[],3:[]}as Record<Seat,Card[]>;let p=0;let seat=next(dealer);for(let r=0;r<5;r++){for(let i=0;i<4;i++){hands[seat].push(deck[p++]);seat=next(seat)}}return{hands,faceUp:deck[p++],remaining:deck.slice(p)}}
export function finishDeal(d:DealResult,dealer:Seat,taker:Seat,trump:Suit):Record<Seat,Card[]>{const hands={0:[...d.hands[0]],1:[...d.hands[1]],2:[...d.hands[2]],3:[...d.hands[3]]}as Record<Seat,Card[]>;const receiver=trump===d.faceUp.suit?taker:dealer;hands[receiver].push(d.faceUp);let p=0;for(const seat of seats){const need=8-hands[seat].length;for(let i=0;i<need;i++)hands[seat].push(d.remaining[p++])}return hands}
