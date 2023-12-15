import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import path from 'node:path';

const container = new ContainerBuilder();
const loader = new YamlFileLoader(container);
const env = process.env.NODE_ENV || 'development';

const routesPath = path.join(__dirname, `application_${env.trim()}.yaml`).replace(/\\/g, '/');

loader.load(routesPath);

export default container;
