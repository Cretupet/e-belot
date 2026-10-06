import{Card,RANKS,SUITS}from"./types";
export function createDeck():Card[]{return SUITS.flatMap(suit=>RANKS.map(rank=>({suit,rank})))}
export function shuffleDeck(deck:Card[],random=Math.random):Card[]{const a=[...deck];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
