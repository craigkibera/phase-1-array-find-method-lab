// code your solution here
function superbowlWin(array) {
    let result = array.find(obj => obj.result === "W")
    if(result) {
        return result.year
    } else return undefined
}
superbowlWin(record)