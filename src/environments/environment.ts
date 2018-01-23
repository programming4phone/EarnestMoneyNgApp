// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*
 * contractDeploymentAddress is the address of the EarnestMoney contract deployed by this command:
 *    truffle.cmd migrate --reset --network ganachedevelopment
 * The address is displayed on the command prompt console.
 *
 * Running migration: 2_deploy_contracts.js
 * Replacing EarnestMoney...
 * ... 0x3590697c496523a26297e8b27d81691a803dd8ee8f24fa9fd81ce73cf2b6261c
 * EarnestMoney: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
 *
 */
export const environment = {
  production: false,
  contractDeploymentAddress: '0x345ca3e014aaf5dca488057592ee47305d9b3e10'
};
