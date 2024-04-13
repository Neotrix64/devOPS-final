const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

describe('Página web', () => {
  let driver;

  before(async function() {
    this.timeout(10000);
    let options = new firefox.Options();
    driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();
  });

  it('debería mostrar "Hola Mundo"', async () => {
    if (!driver) {
      throw new Error('El driver no está definido');
    }

    await driver.get('https://devopsfinal.surge.sh');

    const bodyText = await driver.findElement(By.tagName('body')).getText();
    assert.strictEqual(bodyText, 'Hola Mundo!');
  });

  after(async function() {
    this.timeout(10000); 
    if (driver) {
      await driver.quit();
    }
  });
});
