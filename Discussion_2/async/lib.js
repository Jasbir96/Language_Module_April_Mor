function runMlalgo(amount, cb) {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
        console.log("payment done");
        cb();
        cb();
        cb();
        cb();
        cb();
    }, 1000);
}
function runPMAlgo(amount) {
    return new Promise(function (resolve, reject) {
        console.log("running ml algo");
        console.log("processing payment");
        setTimeout(function () {
            console.log("payment done");
            resolve();
            resolve();
            resolve();
            resolve();
            resolve();
        }, 1000);
    })
}
module.exports = {
    runMlalgo,
    runPMAlgo
}