import{test,expect} from '@playwright/test'

test('Product checkout', async ({page}) => {
      await page.goto('https://www.amazon.com/');
      await page.goto('https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
      await page.getByLabel('Email or mobile phone number').click();
      await page.getByLabel('Email or mobile phone number').fill('9139370676');
      await page.getByLabel('Continue').click();
      await page.getByLabel('Password').fill('Sammy@79');
      await page.getByLabel('Sign in', { exact: true }).click();
      await page.getByLabel('Amazon', { exact: true }).click();

  await page.getByPlaceholder('Search Amazon').fill('men\'s fusion grip extra wide');
  await page.getByPlaceholder('Search Amazon').press('Enter');
  await page.getByRole('link', { name: 'Men\'s Fusion Grip Extra Wide', exact: true }).click();
//   await page.getByLabel('Close', { exact: true }).click();
//   await page.getByLabel('Add to Cart').click();
  await page.locator('#dropdown_selected_size_name span').nth(1).click();
  await page.getByLabel('10', { exact: true }).getByText('10').click();
  await page.getByLabel('Add to Cart').click();
  await page.getByLabel('Proceed to checkout\n                    (1 item)\n                    \n          ').click();
  await page.locator('.a-container').first().click();


});