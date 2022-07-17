import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';

import swaggerSchemas from '../models/swaggerSchemas';

const options = {
  swaggerDefinition: {
    info: {
      title: 'Workbench',
      version: '2.1.0'
    },
    basePath: '/',
    host: global.api_url,
    components: {
      schemas: swaggerSchemas,
    }
  },
  apis: ['dist/api/routes/*.js', 'dist/utils/responses.js']
};
const swaggerSpec = swaggerJSDoc(options);

export default app => {
  app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};