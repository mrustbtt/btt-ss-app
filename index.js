const express = require('express')
const app = express()
const puppeteer = require('puppeteer');
const sharp = require('sharp');

const mindrustURL = "https://bitcointalk.org/index.php?action=profile;u=176777"
const Kavelj22URL = "https://bitcointalk.org/index.php?action=profile;u=2443746"
const PeanutswarURL = "https://bitcointalk.org/index.php?action=profile;u=2762272"
const dansus021URL = "https://bitcointalk.org/index.php?action=profile;u=392207"
const gagux123URL = "https://bitcointalk.org/index.php?action=profile;u=1038114"
const Learn_BitcoinURL = "https://bitcointalk.org/index.php?action=profile;u=3506304"
const HatchyURL = "https://bitcointalk.org/index.php?action=profile;u=3546931"
const ChilwellURL = "https://bitcointalk.org/index.php?action=profile;u=3499955"
const Nalain420URL = "https://bitcointalk.org/index.php?action=profile;u=3548693"
const r_victoryURL = "https://bitcointalk.org/index.php?action=profile;u=1021018"
const DYING_S0ULURL = "https://bitcointalk.org/index.php?action=profile;u=3513442"
const cyganURL = "https://bitcointalk.org/index.php?action=profile;u=27470"
const GazetaBitcoinURL = "https://bitcointalk.org/index.php?action=profile;u=1285797"
const zasadURL = "https://bitcointalk.org/index.php?action=profile;u=2654005"
const Husna_QAURL = "https://bitcointalk.org/index.php?action=profile;u=1827294"
const Ale88URL = "https://bitcointalk.org/index.php?action=profile;u=932931"
const paid2URL = "https://bitcointalk.org/index.php?action=profile;u=3373825"
const PorfiriiURL = "https://bitcointalk.org/index.php?action=profile;u=991374"
const DrBeerURL = "https://bitcointalk.org/index.php?action=profile;u=201654"
const BaofengURL = "https://bitcointalk.org/index.php?action=profile;u=984384"


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
    await page.screenshot({path: './images/mindrustURL.png'}); 

    await page.goto(Kavelj22URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/Kavelj22URL.png'}); 

    await page.goto(PeanutswarURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/PeanutswarURL.png'});

    await page.goto(dansus021URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/dansus021URL.png'});

    await page.goto(gagux123URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/gagux123URL.png'}); 

    await page.goto(Learn_BitcoinURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/Learn_BitcoinURL.png'}); 

    await page.goto(HatchyURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/HatchyURL.png'}); 

    await page.goto(ChilwellURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/ChilwellURL.png'}); 

    await page.goto(Nalain420URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/Nalain420URL.png'}); 

    await page.goto(r_victoryURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/r_victoryURL.png'}); 

    await page.goto(DYING_S0ULURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/DYING_S0ULURL.png'}); 

    await page.goto(cyganURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/cyganURL.png'}); 

    await page.goto(GazetaBitcoinURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/GazetaBitcoinURL.png'}); 

    await page.goto(zasadURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/zasadURL.png'}); 

    await page.goto(Husna_QAURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/Husna_QAURL.png'}); 

    await page.goto(Ale88URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/Ale88URL.png'}); 

    await page.goto(paid2URL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/paid2URL.png'}); 

    await page.goto(PorfiriiURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/PorfiriiURL.png'}); 

    await page.goto(DrBeerURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/DrBeerURL.png'}); 

    await page.goto(BaofengURL);
    await page.evaluate(() => document.body.style.zoom = 2.0  );
    await page.screenshot({path: './images/BaofengURL.png'});

    await browser.close();


    await sharp("./images/mindrustURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/mindrustURL.png")

    await sharp("./images/Kavelj22URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/Kavelj22URL.png")
  
    await sharp("./images/PeanutswarURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/PeanutswarURL.png")
  
    await sharp("./images/dansus021URL.png")
    .extract({ left: 350, top: 446, width: 390, height: 195 })
    .toFile("./images/editedimages/dansus021URL.png")
  
    await sharp("./images/gagux123URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/gagux123URL.png")

    await sharp("./images/Learn_BitcoinURL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/Learn_BitcoinURL.png")

    await sharp("./images/gagux123URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/gagux123URL.png")

    await sharp("./images/HatchyURL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/HatchyURL.png")

    await sharp("./images/ChilwellURL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/ChilwellURL.png")

    await sharp("./images/Nalain420URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/Nalain420URL.png")

    await sharp("./images/r_victoryURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/r_victoryURL.png")

    await sharp("./images/DYING_S0ULURL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/DYING_S0ULURL.png")

    await sharp("./images/cyganURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/cyganURL.png")

    await sharp("./images/GazetaBitcoinURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/GazetaBitcoinURL.png")

    await sharp("./images/zasadURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/zasadURL.png")

    await sharp("./images/Husna_QAURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/Husna_QAURL.png")

    await sharp("./images/Ale88URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/Ale88URL.png")

    await sharp("./images/paid2URL.png")
    .extract({ left: 350, top: 446, width: 650, height: 195 })
    .toFile("./images/editedimages/paid2URL.png")

    await sharp("./images/PorfiriiURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/PorfiriiURL.png")

    await sharp("./images/DrBeerURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/DrBeerURL.png")

    await sharp("./images/BaofengURL.png")
    .extract({ left: 350, top: 446, width: 370, height: 195 })
    .toFile("./images/editedimages/BaofengURL.png")

  

  }
screenShot()


const PORT = 3001

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})