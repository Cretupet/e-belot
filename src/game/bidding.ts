import{Seat,Suit,SUITS}from"./types";
export type Bid={type:"pass"}|{type:"take";suit:Suit};
export interface BiddingState{dealer:Seat;faceUpSuit:Suit;round:1|2;turn:Seat;passes:number;trump:Suit|null;taker:Seat|null;forcedDealer:boolean}
const next=(s:Seat)=>((s+1)%4)as Seat;
export function startBidding(dealer:Seat,faceUpSuit:Suit):BiddingState{return{dealer,faceUpSuit,round:1,turn:next(dealer),passes:0,trump:null,taker:null,forcedDealer:false}}
export function allowedSuits(s:BiddingState):Suit[]{return s.round===1?[s.faceUpSuit]:SUITS.filter(x=>x!==s.faceUpSuit)}
export function bid(s:BiddingState,seat:Seat,b:Bid):BiddingState{if(s.trump)throw Error("Bidding finished");if(seat!==s.turn)throw Error("Not your turn");if(b.type==="take"){if(!allowedSuits(s).includes(b.suit))throw Error("Suit not allowed");return{...s,trump:b.suit,taker:seat}}
 const passes=s.passes+1;if(s.round===1&&passes===4)return{...s,round:2,passes:0,turn:next(s.dealer)};
 if(s.round===2&&passes===3&&next(seat)===s.dealer)return{...s,passes,turn:s.dealer,forcedDealer:true};
 if(s.round===2&&s.forcedDealer&&seat===s.dealer)throw Error("Dealer must choose trump");return{...s,passes,turn:next(seat)}}
