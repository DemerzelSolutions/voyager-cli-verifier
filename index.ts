import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import { COMPILER_VERSION, LICENSE, NETWORK } from './lib/constants.js';
import { enterClassOrContractAddress, enterCompilerVersion, enterLicense, enterIsAccountContract, enterContractName, enterNetwork, enterExistingClassOrContractAddress, enterContractToVerify, enterContractToVerifyWithValidDependencies } from './lib/prompts.js'
import { verifyContractOrClass } from './lib/requests.js';
import { withSpinner } from './lib/utils.js';

(async () => {
    clear();

    console.log(
        chalk.yellow(
            figlet.textSync('Voyager', { horizontalLayout: 'full' })
        )
    );
    console.log(
        chalk.yellow(
            figlet.textSync('CLI Verifier', { horizontalLayout: 'full' })
        )
    );

    const network: NETWORK = await enterNetwork()
    const address: string = await enterExistingClassOrContractAddress(network)
    const version: COMPILER_VERSION = await enterCompilerVersion()
    const license: LICENSE = await enterLicense()
    const isAccount: boolean = await enterIsAccountContract()
    const { contract, files } = await enterContractToVerifyWithValidDependencies()
    const contractName: string = await enterContractName(contract)
    console.log(files, network, address, version, license, isAccount, contract, contractName);
    const verifyContractResult = await withSpinner('Verifying the contract..', verifyContractOrClass(network, address, version, license, isAccount, contractName, contract, files))
})();