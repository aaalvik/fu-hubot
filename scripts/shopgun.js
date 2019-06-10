const cheerio = require('cheerio');

const URL = 'https://shopgun.com/search/';

module.exports = robot => {
    robot.respond(/tilbud ([\wæøåÆØÅ]+)/, res => {
        const søkeord = res.match[1];

        robot.http(URL + søkeord).get()((error, response, htmlBody) => {
            const $ = cheerio.load(htmlBody);

            // console.log(`**** ${varer} ****`);
            const varer = $('.css-109q47i li')
                .map((index, element) => {
                    const pris = $(element)
                        .find("*[itemprop = 'price']")
                        .attr("content");

                    const navn = $(element)
                        .find('.css-yfx76r header')
                        .text();

                    const butikk = $(element)
                        .find('.css-hgfvfz')
                        .text();

                    const bilde = $(element)
                        .find('.css-clmgeg')
                        .attr('style');

                    // removes 'background-image:'
                    const url = bilde 
                        ? bilde.substr(21).slice(0, -1)
                        : '';

                    return {
                        butikk,
                        pris,
                        navn,
                        url
                    }
                })
                .get();
            
            varer.splice(-4, 4);

            res.send(varer.map(vare =>
                `${vare.url}\n${vare.navn}\n*${vare.pris} kr* på ${vare.butikk}!`
            ).join('\n\n'));
        });
    })
};