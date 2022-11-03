import { BigNumber, utils } from 'ethers';
import fs from 'fs';
import path from 'path';
import { Spinner } from 'cli-spinner';

export const getCurrentDirectoryBase = () => {
    return path.basename(process.cwd());
}

export const directoryExists = (filePath) => {
    return fs.existsSync(filePath);
}

export const normalizeContractOrClassAddress = (address: string) => {
    return utils.hexZeroPad(BigNumber.from(address).toHexString(), 32)
}

export const withSpinner = async (spinnerMessage: string, promise: Promise<any>) => {
    const spinner = new Spinner(`${spinnerMessage} %s`);
    spinner.setSpinnerString('|/-\\');
    spinner.start();

    const result = await promise
    spinner.stop(true);

    return result;
}

export const extractCairoContractName = (name: string) => name.slice(name.lastIndexOf('\\') + 1, name.indexOf('.cairo'))

export const extractFilesForVerification = (contractPath: string) => {
    const CONTRACT_IMPORT_REGEX = /^from (?!starkware)(.*) import/gm
    const files = []

    const pathsToExtract = [contractPath]
    while (pathsToExtract.length) {
        const filePath = pathsToExtract.pop()
        
        const contractContents: string = fs.readFileSync(filePath, "utf-8");
        const contract = { path: filePath, content: contractContents }
        files.push(contract)

        const dependencies = [...contractContents.matchAll(CONTRACT_IMPORT_REGEX)]
            .flatMap(x => x[1].replace('\.', '\\') + '.cairo')
        
        pathsToExtract.push(...dependencies)
    }

    return files
}