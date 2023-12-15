import { MongoClientFactory } from '../../../../src/Contexts/Shared/infrastructure/persistence/mongo/MongoClientFactory';
import { MongoClient } from 'mongodb';

describe('MongoClientFactory', () => {
  const factory = MongoClientFactory;
  let client: MongoClient;

  beforeEach(async () => {
    client = await factory.createClient('test', { url: 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority' });
  });

  afterEach(async () => {
    await client.close();
  });

  it('creates a new client with the connection already established', () => {
    expect(client).toBeInstanceOf(MongoClient);
  });

  it('creates a new client if it does not exist a client with the given name', async () => {
    const newClient = await factory.createClient('test2', { url: 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority' });

    expect(newClient).not.toBe(client);

    await newClient.close();
  });

  it('returns a client if it already exists', async () => {
    const newClient = await factory.createClient('test', { url: 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority' });

    expect(newClient).toBe(client);

    await newClient.close();
  });
});