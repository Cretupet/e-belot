import{cardStrength}from"./cards";import{Card,Seat,Suit}from"./types";
export interface PlayedCard{seat:Seat;card:Card}
function beats(a:Card,b:Card,lead:Suit,trump:Suit){if(a.suit===b.suit)return cardStrength(a,trump)>cardStrength(b,trump);if(a.suit===trump&&b.suit!==trump)return true;if(a.suit!==trump&&b.suit===trump)return false;return a.suit===lead&&b.suit!==lead}
export function currentWinner(trick:PlayedCard[],trump:Suit):PlayedCard|null{if(!trick.length)return null;const lead=trick[0].card.suit;return trick.slice(1).reduce((w,p)=>beats(p.card,w.card,lead,trump)?p:w,trick[0])}
export function legalCards(hand:Card[],trick:PlayedCard[],trump:Suit):Card[]{if(!trick.length)return hand;const lead=trick[0].card.suit;const follow=hand.filter(c=>c.suit===lead);const winner=currentWinner(trick,trump)!;
 if(follow.length){if(lead!==trump)return follow;const higher=follow.filter(c=>cardStrength(c,trump)>cardStrength(winner.card,trump));return higher.length?higher:follow}
 const trumps=hand.filter(c=>c.suit===trump);if(!trumps.length)return hand;const tableTrump=trick.filter(p=>p.card.suit===trump).reduce<PlayedCard|null>((w,p)=>!w||cardStrength(p.card,trump)>cardStrength(w.card,trump)?p:w,null);if(!tableTrump)return trumps;const higher=trumps.filter(c=>cardStrength(c,trump)>cardStrength(tableTrump.card,trump));return higher.length?higher:trumps}
