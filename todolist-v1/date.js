// module.exports and exports are one and the same thing.

exports.myDate = function() {
options = {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
}
const today = new Date();
const day = today.toLocaleDateString('en-US', options);
return day;
}

exports.myDay = function() {
    console.log("My day called.");
}