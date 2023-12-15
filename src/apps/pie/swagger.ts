import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Exchange Nest',
    description: 'Implementation of Swagger with TypeScript'
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: ''
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/*.route.*'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
