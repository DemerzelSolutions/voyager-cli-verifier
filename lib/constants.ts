export enum NETWORK { 
    mainnet = 'mainnet',
    goerli = 'goerli',
    integration = 'integration' 
}
export const networkNames = Object.values(NETWORK)

export const urlByNetwork = {
    mainnet: 'https://voyager.online',
    goerli: 'https://goerli.voyager.online',
    integration: 'https://integration.voyager.online'
}

export enum COMPILER_VERSION {
    "0.6.0" = "0.6.0",
    "0.6.1" = "0.6.1",
    "0.6.2" = "0.6.2",
    "0.7.0" = "0.7.0",
    "0.7.1" = "0.7.1",
    "0.8.0" = "0.8.0",
    "0.8.1" = "0.8.1",
    "0.8.2" = "0.8.2",
    "0.9.0" = "0.9.0",
    "0.9.1" = "0.9.1",
    "0.10.0" = "0.10.0",
    "0.10.1" = "0.10.1",
}
export const compilerVersions = Object.values(COMPILER_VERSION)

export enum LICENSE {
    "No License (None)" = "No License (None)",
    "The Unlicense (Unlicense)" = "The Unlicense (Unlicense)",
    "MIT License (MIT)" = "MIT License (MIT)",
    "GNU General Public License v2.0 (GNU GPLv2)" = "GNU General Public License v2.0 (GNU GPLv2)",
    "GNU General Public License v3.0 (GNU GPLv3)" = "GNU General Public License v3.0 (GNU GPLv3)",
    "GNU Lesser General Public License v2.1 (GNU LGPLv2.1)" = "GNU Lesser General Public License v2.1 (GNU LGPLv2.1)",
    "GNU Lesser General Public License v3.0 (GNU LGPLv3)" = "GNU Lesser General Public License v3.0 (GNU LGPLv3)",
    'BSD 2-clause "Simplified" license (BSD-2-Clause)' = 'BSD 2-clause "Simplified" license (BSD-2-Clause)',
    'BSD 3-clause "New" Or "Revisited license (BSD-3-Clause)' = 'BSD 3-clause "New" Or "Revisited license (BSD-3-Clause)',
    "Mozilla Public License 2.0 (MPL-2.0)" = "Mozilla Public License 2.0 (MPL-2.0)",
    "Open Software License 3.0 (OSL-3.0)" = "Open Software License 3.0 (OSL-3.0)",
    "Apache 2.0 (Apache-2.0)" = "Apache 2.0 (Apache-2.0)",
    "GNU Affero General Public License (GNU AGPLv3)" = "GNU Affero General Public License (GNU AGPLv3)",
    "Business Source License (BSL 1.1)" = "Business Source License (BSL 1.1)",
}
export const licenses = Object.values(LICENSE)

