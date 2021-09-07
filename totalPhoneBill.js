module.exports =function totalPhoneBill(callsMadeAndSmsSentString) {
    const callsAndSms = callsMadeAndSmsSentString.split(",");
    let totalBill = 0;
    for (var i = 0; i < callsAndSms.length; i++) {
        const currentCallsAndSms = callsAndSms[i].trim();
        if (currentCallsAndSms.includes("call")) {
            totalBill += 2.75;
        }
        else if (currentCallsAndSms.includes("sms")) {
            totalBill += 0.65;
        }
    }
    return "R" + totalBill.toFixed(2);
}
