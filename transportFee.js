module.exports = function transportFee(Shift) {
    switch (Shift) {
        case "morning":
            return "R20";
        case "afternoon":
            return "R10";
        case "nightshift":
            return "free";
        default:
            return "for the night shift return free";
    }
}
