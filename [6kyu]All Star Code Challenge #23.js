/*
link: https://www.codewars.com/kata/5865dd726b56998ec4000185
***DESCRIPTION***
Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score 
(highest score is index 0, 2nd highest is index 1, etc.).

Each player's score is calculated as follows:

    1) Each normal kill is worth 100 points
    2) Each assist is worth 50 points
    3) Each point of damage done is worth 0.5 points
    4) Each point of healing done is worth 1 point
    5) The longest kill streak is worth 2^N, where N is the number of kills of the streak
    6) Environmental kills are worth 500 points (These are counted separately from normal kills)
    
*/

//***SOLUTION***

function getTotalPoints(obj){
  const points = {
    normKill: 100,
    assist: 50,
    damage: 0.5,
    healing: 1,
    envKill: 500
  }
  
  let totalScore = Object.keys(obj).map(score => points[score] ? points[score] * obj[score] : 0, 0)
    return totalScore.reduce((acc, pt) => acc + pt, 0)
}

function scoring(array){
  return array.sort((a, b) => (getTotalPoints(b) + Math.pow(2, b.streak)) - (getTotalPoints(a) + Math.pow(2, a.streak)))
               .map(pl => pl.name)
}
