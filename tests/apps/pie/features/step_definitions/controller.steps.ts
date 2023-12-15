import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { PieApp } from '../../../../../src/apps/pie/PieApp'

let _request: request.Test;
let application: PieApp;
let _response: request.Response;

BeforeAll(async () => {
  application = new PieApp();
  await application.start();
});

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).post(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

AfterAll(async () => {
  await application.stop();
});