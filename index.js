// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    if (blocks > 42) {
    return blocks - 42;
    }
    else {
    return 42 - blocks;     
} }
    //above could also be a ternary operator
    // return blocks > 42 ? blocks - 42 : 42 - blocks;  

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}
//nested above in second function because it was already part of the equation
//in the math problem, 1 block = 264 feet

function distanceTravelledInFeet(start, destination){
   const result = (destination - start) * 264
   if (start > destination) {
        return result * -1; 
        }
        else {
        return result 
        }

    // below did not work
    // return start > destination * 264 ? start - destination * 264 : destination - start * -264;
}
//     if (starting > ending) {
//     return starting - ending; 
//     }
//     else {
//     return ending - starting; 
//     }
// }

function calculatesFarePrice (start, destination){
    const travel = distanceTravelledInFeet(start, destination)
        if (travel <= 400) {
        return 0 }
        else if (travel >400, travel < 2000) {
            return (travel - 400) * .02}
        else if (travel > 2000 , travel < 2500) {
            return 25} 
        else if (travel > 2500){
            return 'cannot travel that far'}
        }
        