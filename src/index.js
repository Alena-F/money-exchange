// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   let result = {};
   if (currency <= 0) {
       return result
   } else if (currency > 10000) {
       result['error'] =  "You are rich, my friend! We don't have so much coins for exchange"}
    else {
    let H = Math.floor(currency/50)
   if (H>0) {
    result['H'] = H 
   }
   let Q = Math.floor((currency-H*50)/25)
   if (Q>0) {
    result['Q'] = Q 
   }
   let D = Math.floor((currency-H*50-Q*25)/10)
   if (D>0) {
    result['D'] = D 
   }
   let N = Math.floor((currency-H*50-Q*25-D*10)/5)
   if (N>0) {
    result['N'] = N  
   }
   let P = currency-H*50-Q*25-D*10-N*5
   if (P>0) {
    result['P'] = P  
   }
   }
   return result
}
