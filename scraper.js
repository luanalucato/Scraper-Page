const puppeteer = require('puppeteer');

async function scrapeProduct(url); {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);
    
    cont [el] = await page.$x('//*[@id="imgBlkFront"]');
    const src = await el.getProperty('src');
    const imgUrl = await src.jsonValue();

    cont [el2] = await page.$x('//*[@id="productSubtitle"]');
    const src = await el2.getProperty('TextContent');
    const title = await src.jsonValue();

    cont [el3] = await page.$x('//*[@id="buyNewSection"]/div/div/div/div[2]/a/div/div[2]/span/span');
    const src = await el3.getProperty('TextContent');
    const price = await txt2.jsonValue();
   

    console.log({imgUrl, title, price});


    browser.close();
    
}

scrapeProduct('https://www.amazon.co.uk/PHOPOLLO-Changing-Cuttable-Controller-Decoration/dp/B07WRFQ3TP/ref=sr_1_1_sspa?crid=3189ALNDG27GE&dchild=1&keywords=led+strip+lights&qid=1612907914&sprefix=Led%2Caps%2C189&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVEc2Q041MUlZVEQyJmVuY3J5cHRlZElkPUEwMzMwMjk1MjNaUE1FUEZGME5KVSZlbmNyeXB0ZWRBZElkPUEwNzQyNjE3M1JWUDJGWDY2VE85WSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=');
