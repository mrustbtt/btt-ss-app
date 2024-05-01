const express = require('express')
const app = express()
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const pathBTT = "https://bitcointalk.org/index.php?action=profile;u="

const mindrustURL = pathBTT + "176777"
const Kavelj22URL = pathBTT + "2443746"
const PeanutswarURL = pathBTT + "2762272"
const dansus021URL = pathBTT + "392207"
const gagux123URL = pathBTT + "1038114"
const Learn_BitcoinURL = pathBTT + "3506304"
const HatchyURL = pathBTT + "3546931"
const ChilwellURL = pathBTT + "3499955"
const Nalain420URL = pathBTT + "3548693"
const r_victoryURL = pathBTT + "1021018"
const DYING_S0ULURL = pathBTT + "3513442"
const cyganURL = pathBTT + "27470"
const GazetaBitcoinURL = pathBTT + "1285797"
const zasadURL = pathBTT + "2654005"
const Husna_QAURL = pathBTT + "1827294"
const Ale88URL = pathBTT + "932931"
const paid2URL = pathBTT + "3373825"
const PorfiriiURL = pathBTT + "991374"
const DrBeerURL = pathBTT + "201654"
const BaofengURL = pathBTT + "984384"

const path1 = "./images/"
const pathEditedImages = "./images/editedimages/"



async function screenShot() {
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    await page.goto(mindrustURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'mindrustURL.png'}); 

    await page.goto(Kavelj22URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'Kavelj22URL.png'});

    await page.goto(PeanutswarURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'PeanutswarURL.png'});

    await page.goto(dansus021URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'dansus021URL.png'});

    await page.goto(gagux123URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'gagux123URL.png'}); 

    await page.goto(Learn_BitcoinURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'Learn_BitcoinURL.png'}); 

    await page.goto(HatchyURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'HatchyURL.png'}); 

    await page.goto(ChilwellURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'ChilwellURL.png'}); 

    await page.goto(Nalain420URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'Nalain420URL.png'}); 

    await page.goto(r_victoryURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'r_victoryURL.png'}); 

    await page.goto(DYING_S0ULURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'DYING_S0ULURL.png'}); 

    await page.goto(cyganURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'cyganURL.png'}); 

    await page.goto(GazetaBitcoinURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'GazetaBitcoinURL.png'}); 

    await page.goto(zasadURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'zasadURL.png'}); 

    await page.goto(Husna_QAURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'Husna_QAURL.png'}); 

    await page.goto(Ale88URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'Ale88URL.png'}); 

    await page.goto(paid2URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'paid2URL.png'}); 

    await page.goto(PorfiriiURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'PorfiriiURL.png'}); 

    await page.goto(DrBeerURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'DrBeerURL.png'}); 

    await page.goto(BaofengURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: path1 + 'BaofengURL.png'});

    await browser.close();


    // mind 1
    await sharp(path1 + "mindrustURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/mindrustURL.png")

    // kavel 2 

    await sharp(path1 + "Kavelj22URL.png")
    .extract({ left: 350, top: 446, width: 170, height: 195 })
    .toFile(pathEditedImages + "Kavelj22URL_1.png")

    await sharp(path1 + "Kavelj22URL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Kavelj22URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "Kavelj22URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "Kavelj22URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + 'finalimage/Kavelj22URL_end.png');

    // peanuts 3

    await sharp(path1 + "PeanutswarURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/PeanutswarURL.png")

    // dans 4
  
    await sharp(path1 + "dansus021URL.png")
    .extract({ left: 350, top: 446, width: 120, height: 195 })
    .toFile(pathEditedImages + "dansus021URL_1.png")

    await sharp(path1 + "dansus021URL.png")
    .extract({ left: 520, top: 446, width: 250, height: 195 })
    .toFile(pathEditedImages + "dansus021URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "dansus021URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "dansus021URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/dansus021URL_end.png");

    // gagux 5
  
    await sharp(path1 + "gagux123URL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "gagux123URL_1.png")

    await sharp(path1 + "gagux123URL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "gagux123URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "gagux123URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "gagux123URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/gagux123URL_end.png");

    // learn 6

    await sharp(path1 + "Learn_BitcoinURL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Learn_BitcoinURL_1.png")

    await sharp(path1 + "Learn_BitcoinURL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Learn_BitcoinURL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "Learn_BitcoinURL_1.png", gravity: 'west' },
      { input: pathEditedImages + "Learn_BitcoinURL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/Learn_BitcoinURL_end.png");

    // hatch 7

    await sharp(path1 + "HatchyURL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "HatchyURL_1.png")

    await sharp(path1 + "HatchyURL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "HatchyURL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "HatchyURL_1.png", gravity: 'west' },
      { input: pathEditedImages + "HatchyURL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + 'finalimage/HatchyURL_end.png');

    // chil 8

    await sharp(path1 + "ChilwellURL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "ChilwellURL_1.png")

    await sharp(path1 + "ChilwellURL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "ChilwellURL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "ChilwellURL_1.png", gravity: 'west' },
      { input: pathEditedImages + "ChilwellURL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/ChilwellURL_end.png");

    // nala 9

    await sharp(path1 + "Nalain420URL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Nalain420URL_1.png")

    await sharp(path1 + "Nalain420URL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Nalain420URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "Nalain420URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "Nalain420URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/Nalain420URL_end.png");

    

    // vic 10

    await sharp(path1 + "r_victoryURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/r_victoryURL.png")

    // dying 11

    await sharp(path1 + "DYING_S0ULURL.png")
    .extract({ left: 350, top: 446, width: 120, height: 195 })
    .toFile(pathEditedImages + "DYING_S0ULURL_1.png")

    await sharp(path1 + "DYING_S0ULURL.png")
    .extract({ left: 650, top: 446, width: 250, height: 195 })
    .toFile(pathEditedImages + "DYING_S0ULURL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "DYING_S0ULURL_1.png", gravity: 'west' },
      { input: pathEditedImages + "DYING_S0ULURL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/DYING_S0ULURL_end.png");

    

    // cyg 12

    await sharp(path1 + "cyganURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/cyganURL.png")

    // gazet 13

    await sharp(path1 + "GazetaBitcoinURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/GazetaBitcoinURL.png")

    // zasa 14

    await sharp(path1 + "zasadURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/zasadURL.png")

    

    // hus 15

    await sharp(path1 + "Husna_QAURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/Husna_QAURL.png")

    // ale 16

    await sharp(path1 + "Ale88URL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Ale88URL_1.png")

    await sharp(path1 + "Ale88URL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "Ale88URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "Ale88URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "Ale88URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/Ale88URL_end.png");



    // paid 17

    await sharp(path1 + "paid2URL.png")
    .extract({ left: 350, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "paid2URL_1.png")

    await sharp(path1 + "paid2URL.png")
    .extract({ left: 715, top: 446, width: 200, height: 195 })
    .toFile(pathEditedImages + "paid2URL_2.png")

    await sharp(pathEditedImages + "bkgrnd.png")
    .composite([
      { input: pathEditedImages + "paid2URL_1.png", gravity: 'west' },
      { input: pathEditedImages + "paid2URL_2.png", gravity: 'east' }
    ])
    .toFile(pathEditedImages + "finalimage/paid2URL_end.png");

    // port 18

    await sharp(path1 + "PorfiriiURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/PorfiriiURL.png")


    // drbeer 19

    await sharp(path1 + "DrBeerURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/DrBeerURL.png")

    // bao 20

    await sharp(path1 + "BaofengURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile(pathEditedImages + "finalimage/BaofengURL.png")


  }
screenShot()


const PORT = 3001

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})