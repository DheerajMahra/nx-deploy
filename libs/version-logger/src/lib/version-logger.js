import packageJson from '../../../../package.json';

export const VersionLogger = () => {
  console.log(`${packageJson.name}::${packageJson.version}`);
}
