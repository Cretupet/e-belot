import {TeamId,TeamState} from "./types";
export const INITIAL_TARGET=101;
export const pointsToBil=(points:number)=>Math.round(points/10);
export const nextTarget=(a:number,b:number,target:number)=>a>=target&&b>=target?target+50:target;
export function winnerAtTarget(a:number,b:number,target:number):TeamId|null{if(a>=target&&b<target)return"A";if(b>=target&&a<target)return"B";return null}
export function addBolt(team:TeamState):TeamState{const bolts=team.bolts+1;return bolts===3?{bil:team.bil-10,bolts:0}:{...team,bolts}}
export function applyKaputPenalty(team:TeamState,dealerTeam:boolean):TeamState{let next={...team,bil:team.bil-10};if(dealerTeam)next=addBolt(next);return next}
