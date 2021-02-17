//Using the node module -get-date-time call the current date and time timestamp and return it via module.exports to the team.js file
function time(date) {
    let this_moment = date ? new Date(date) : new Date(),
        year = this_moment.getFullYear(),
        month = this_moment.getMonth() + 1,
        day = this_moment.getDate(),
        hour = this_moment.getHours(),
        minute = this_moment.getMinutes(),
        second = this_moment.getSeconds();
    let time = [year, month, day, hour, minute, second].map(function(unit) {
        return (unit < 10) ? unit = "0" + unit : unit;
    });
    return time.join('');
}

module.exports = time;