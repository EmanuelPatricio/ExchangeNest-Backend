import convict from 'convict';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const pieConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  jwt_secret: {
    doc: 'The JWT secret key.',
    secret: 'JWT_SECRET',
    default: 'default'
  },
  jwt_audience: {
    doc: 'The JWT Audience.',
    secret: 'JWT_AUDIENCE',
    default: 'default'
  },
  jwt_issuer: {
    doc: 'The JWT Issuer.',
    secret: 'JWT_ISSUER',
    default: 'default'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      default:
        process.env.MONGO_URL || 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority',
      env: process.env.MONGO_URL || 'mongodb+srv://test:test@cluster0.5n3ek.mongodb.net/?retryWrites=true&w=majority'
    }
  }
});

const defaultConfigPath = path.join(__dirname, 'default.json').replace(/\\/g, '/');
const envConfigPath = path.join(__dirname, pieConfig.get('env').trim() + '.json').replace(/\\/g, '/');

pieConfig.loadFile([defaultConfigPath, envConfigPath]);

export default pieConfig;
