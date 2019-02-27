const cheerio = require('cheerio');

const URL = 'https://www.uib.no/student/eksamensplan/matnat';

module.exports = robot => {
  robot.respond(/eksamen (\w+)/, res => {
    const emne = (res.match[1]).toUpperCase();
    robot.http(URL).get()((error, response, htmlBody) => {
      const $ = cheerio.load(htmlBody);

      const fag = $('.item-list .faculty-exam-list li')
        .map((index, element) => {
          const [dato, tidspunkt] = $(element)
            .find('.uib-study-exam-assessment dt:first-of-type + dd')
            .text()
            .split(/\s*,\s+/);
          const stedText = $(element)
            .find('.uib-study-exam-assessment')
            .text();
          const sted = (stedText.includes('Sted') ? stedText.replace(/^.*Sted\s*(.*)/gs, '$1').trim() : '🤷‍♀️');

          return {
            navn: $(element)
              .find('.exam-list-title')
              .text()
              .replace(/.*\/\s*(.*)/, '$1')
              .trim(),
            emnekode: $(element)
              .find('.exam-list-title a')
              .text(),
            dato,
            tidspunkt,
            sted
          };
        })
        .get();
      const valgtEmne = fag.find(f => f.emnekode === emne);
      const klokka = valgtEmne.tidspunkt ? `${valgtEmne.tidspunkt}` : `🤷‍♀️`;
      res.send(
        `${valgtEmne.navn}: *${valgtEmne.dato}* kl ${klokka}. Sted: ${valgtEmne.sted}`
      );
    });
  });
};
