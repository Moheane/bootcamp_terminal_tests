module.exports = function countAllPaarl(regNum) {
    var regNumPaarl = regNum.split(",");
    let counter = 0;

    for (var i = 0; i < regNumPaarl.length; i++) {
        var howManyFromPaarl = regNumPaarl[i].trim();

        if (howManyFromPaarl.includes("CJ")) {
            counter++;
        }
    }
    return counter
}