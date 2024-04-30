// Code your solution here

function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter(function (driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
    return matchingDrivers;
};

function fuzzyMatch(drivers, string) {
    const matchingDrivers = drivers.filter(function (driver) {
        const stringLength = string.length;
        const partialDriver = driver.slice(0, stringLength)
        return partialDriver === string;
    });
    return matchingDrivers;
};

function matchName(drivers, string) {
    const matchingDrivers = drivers.filter(function(driver) {
        return driver.name === string;
    })
    return matchingDrivers;
};