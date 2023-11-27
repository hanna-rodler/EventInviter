import { test, expect } from '@playwright/test';

const testData = {
  firstName: 'Anonymous',
  lastName: 'Test',
  telNumber: '4306505186677',
  email: 'a.test@example.com',
};

const testDataEvent = {
  name: "Test Event",
  date: "01.01.2022",
  location: "Hagenberg",
  time: "12:00",
  description: "This is a description",
};

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173');
});

test('Successfully create a new event', async ({ page }) => {
  await page.getByText("Create Event").click();

  await page.fill('#name', testDataEvent.name);
  await page.fill('#location', testDataEvent.location);
  await page.fill('#description', testDataEvent.description);
  await page.fill('#date', testDataEvent.date);
  await page.fill('#time', testDataEvent.time);

  await page.getByText("Save").click();

  await page.waitForSelector('#create-event');

  const nameLabelText = await page.getByTestId(`${testDataEvent.name}`).innerHTML();

  expect(nameLabelText).toBe(testDataEvent.name);
});


test('Test filter when invitations have been sent', async ({ page }) => {
  await expect(page.getByText("Eventcalender Festival")).toBeVisible();

  await page.getByText("Invitations not sent yet").click();

  await expect(page.getByText("Eventcalender Festival")).not.toBeVisible();
});

test('Successfully create a new contact', async ({ page }) => {
  let contactElement = page.locator('a[href="/contacts"]')
  await contactElement.click()
  await page.click('#add-contact-button');

  await page.fill('#first-name', testData.firstName);
  await page.fill('#last-name', testData.lastName);
  await page.fill('#tel-number', testData.telNumber);
  await page.fill('#email', testData.email);

  await page.click('#save-contact-button');

  await page.waitForSelector('#add-contact-button');

  const nameLabelText = await page.textContent(`#${testData.firstName}${testData.lastName}`);
  const telNumberLabelText = await page.textContent(`label[id="${testData.telNumber}"]`);

  expect(nameLabelText).toBe(`${testData.firstName} ${testData.lastName}`);
  expect(telNumberLabelText).toBe(testData.telNumber);


  // did not make it work in own testcase -> normally test.describe and in there test("create)... test("drag&drop")
  // ... because after reloading, created contact is gone
  await page.locator('a[href="/"]').click()

  await page.getByRole('button', {name: 'Details'}).first().click()
  await page.locator(`#${testData.firstName}${testData.lastName}`).dragTo(page.getByTestId('drop-area'));

  const testName = await page.getByTestId('test-name').last().innerHTML();

  expect(testName).toBe(`${testData.firstName} ${testData.lastName}`)
});


