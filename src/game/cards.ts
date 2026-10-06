import {Card,Rank,Suit} from "./types";
const normalOrder:Rank[]=["7","8","9","J","Q","K","10","A"];
const trumpOrder:Rank[]=["7","8","Q","K","10","A","9","J"];
const normalPoints:Record<Rank,number>={"7":0,"8":0,"9":0,J:2,Q:3,K:4,"10":10,A:11};
const trumpPoints:Record<Rank,number>={"7":0,"8":0,Q:3,K:4,"10":10,A:11,"9":14,J:20};
export const cardPoints=(c:Card,trump:Suit)=>c.suit===trump?trumpPoints[c.rank]:normalPoints[c.rank];
export const cardStrength=(c:Card,trump:Suit)=>(c.suit===trump?trumpOrder:normalOrder).indexOf(c.rank);
