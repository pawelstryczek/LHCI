/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto('http:\\the-internet.herokuapp.com');
  await page.click("a[href='/checkboxes']");
  await page.screenshot({path: 'example.png'});
 // await page.waitForNavigation({ waitUntil: 'load' });
  // close session for next run
  await page.close();
};