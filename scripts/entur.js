const moment = require('moment');

moment.locale('nb');

const stoppesteder = {
  fantoft: 'NSR:StopPlace:31388',
  byparken: 'NSR:StopPlace:30859',
  florida: 'NSR:StopPlace:58544',
  sandslivegen: 'NSR:StopPlace:58538'
  // bergen_squashsenter: 'OSM:TopographicPlace:4230450821'
};

module.exports = robot => {

    robot.respond(/entur ?(\w+)? ?(\w+)?/, res => {
        let from = (res.match[1] || 'florida').toLowerCase();
        let to = (res.match[2] || 'byparken').toLowerCase();

        if (from == 'squash') {
          from = 'florida';
          to = 'sandslivegen';
        }

        const query = `{
        trip(from: {place: "${stoppesteder[from]}"}, to: {place: "${
        stoppesteder[to]
        }"}, modes: [tram], maximumTransfers: 2, numTripPatterns: 20) {
            tripPatterns {
              startTime
              endTime
              walkDistance
              legs {
                mode
                distance
                line {
                  id
                  publicCode
                }
              }
            }
          }
        }`;
        robot
        .http('https://api.entur.io/journey-planner/v2/graphql')
        .header('ET-Client-Name', 'FU-ii-bot')
        .header('Accept', 'application/json')
        .header('Content-Type', 'application/json')
        .post(JSON.stringify({ query, variables: null }))(
            (err, response, body) => {
            const data = JSON.parse(body);
            const avganger = data.data.trip.tripPatterns;

            const moment1 = moment(avganger[0].startTime);
            const moment2 = moment(avganger[1].startTime);
            const moment3 = moment(avganger[2].startTime);

            const minutter1 = moment1.diff(moment(), 'minutes');
            const fremme1 = moment(avganger[0].endTime).format('LT');
            const minutter2 = moment2.diff(moment(), 'minutes');
            const fremme2 = moment(avganger[1].endTime).format('LT');
            const minutter3 = moment3.diff(moment(), 'minutes');
            const fremme3 = moment(avganger[2].endTime).format('LT');

            console.log(fremme1);

            const first = `🏃‍♀️ *om ${minutter1} minutter* (fremme ${fremme1})`;
            const second = `🚶‍♀️ *om ${minutter2} minutter* (fremme ${fremme2})`;
            const third = `🐌 *om ${minutter3} minutter* (fremme ${fremme3})`;
            
            res.send(`${first}\n${second}\n${third}`);
            }
        );
    })
};