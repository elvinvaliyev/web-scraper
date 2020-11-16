const axios = require('axios');
const cheerio = require('cheerio');

//https://pusher.com/tutorials/web-scraper-node

for (var i = 0; i < 2; i++) {
    const url = `http://www.beyazperde.com/filmler/tum-filmleri/kullanici-puani?page=${i}`;
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html)
            const statsTable = $('html');
            const arrOfField = [];


            statsTable.each(function () {
                const field = $(this).find('.tt_18>.no_underline').text().split("\n");

                arrOfField.push({
                    field
                });
            });

            console.log(arrOfField);
        })
        .catch(console.error);
}