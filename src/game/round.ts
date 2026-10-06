import{pointsToBil}from"./scoring";
export interface RoundInput{cardPoints:[number,number];declarationPoints:[number,number];tricks:[number,number];dealerTeam:0|1;}
export interface RoundResult{winner:0|1|null;award:[number,number];bil:[number,number];kaput:boolean;loserPenaltyBil:number;dealerBolt:boolean;}
export function settleRound(x:RoundInput):RoundResult{const kaput=x.tricks[0]===8||x.tricks[1]===8;if(kaput){const w=x.tricks[0]===8?0:1;const total=252+x.declarationPoints[w];const award:[number,number]=w===0?[total,0]:[0,total];return{winner:w,award,bil:[pointsToBil(award[0]),pointsToBil(award[1])],kaput:true,loserPenaltyBil:-10,dealerBolt:x.dealerTeam!==w}}
 const a=x.cardPoints[0]+x.declarationPoints[0],b=x.cardPoints[1]+x.declarationPoints[1],bank=a+b;if(a===b){const half=bank/2;return{winner:null,award:[half,half],bil:[pointsToBil(half),pointsToBil(half)],kaput:false,loserPenaltyBil:0,dealerBolt:false}}
 const w=a>b?0:1;const award:[number,number]=w===0?[bank,0]:[0,bank];return{winner:w,award,bil:[pointsToBil(award[0]),pointsToBil(award[1])],kaput:false,loserPenaltyBil:0,dealerBolt:x.dealerTeam!==w}}
