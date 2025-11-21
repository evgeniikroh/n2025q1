const textToTruncate = "не тот лев кто лев, а тот лев кто на кружке"
const truncateLimit = 18
const ellipsisSymbol = "..."
if(textToTruncate.length>truncateLimit){
const res=    textToTruncate.slice(0,truncateLimit)+ellipsisSymbol
console.log(res)
}

