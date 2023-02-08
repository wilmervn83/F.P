// Setup: npm install alchemy-sdk
const { Network, Alchemy, Contract, Wallet, Utils} = require("alchemy-sdk");
require("dotenv").config();

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.API_KEY, // Replace with your Alchemy API Key.
  network: Network.MATIC_MUMBAI, // Replace with your network.
};

const alchemy = new Alchemy(settings);
const wallet = new Wallet(process.env.PRIVATE_KEY);

async function main() {
 
//Test Strawberry Donuts

//PROVIDER

  const provider = await alchemy.config.getProvider();
  const donutContractCall = new Contract('0xA1eD62e5348A4db7883DAB9F84cF53a039fFfccd', [
      {
          "constant": false,
          "inputs": [],
          "name": "withdraw",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "constant": false,
          "inputs": [
              {
                  "name": "game",
                  "type": "uint256"
              }
          ],
          "name": "withdrawFrom",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
      },
      {
          "inputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "constructor"
      },
      {
          "payable": true,
          "stateMutability": "payable",
          "type": "fallback"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "name": "BETS",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "game",
                  "type": "uint256"
              },
              {
                  "name": "_idx",
                  "type": "int256"
              }
          ],
          "name": "getCylinder",
          "outputs": [
              {
                  "name": "blockNumber",
                  "type": "uint64"
              },
              {
                  "name": "blockHash",
                  "type": "bytes32"
              },
              {
                  "name": "dep",
                  "type": "uint96"
              },
              {
                  "name": "index",
                  "type": "uint64"
              },
              {
                  "name": "deps",
                  "type": "address[]"
              },
              {
                  "name": "unlucky",
                  "type": "uint8"
              },
              {
                  "name": "jackpot",
                  "type": "int96"
              },
              {
                  "name": "lastDepTime",
                  "type": "uint64"
              },
              {
                  "name": "status",
                  "type": "uint8"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "game",
                  "type": "uint256"
              },
              {
                  "name": "idxFrom",
                  "type": "uint256"
              },
              {
                  "name": "idxTo",
                  "type": "uint256"
              }
          ],
          "name": "getCylinders",
          "outputs": [
              {
                  "name": "blockNumber",
                  "type": "uint256"
              },
              {
                  "name": "blockHash",
                  "type": "bytes32"
              },
              {
                  "name": "dep",
                  "type": "uint96"
              },
              {
                  "name": "index",
                  "type": "uint64[]"
              },
              {
                  "name": "deps",
                  "type": "address[]"
              },
              {
                  "name": "unlucky",
                  "type": "uint8[]"
              },
              {
                  "name": "jackpot",
                  "type": "int96[]"
              },
              {
                  "name": "lastDepTime",
                  "type": "uint64[]"
              },
              {
                  "name": "status",
                  "type": "uint8[]"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "game",
                  "type": "uint256"
              }
          ],
          "name": "getGameState",
          "outputs": [
              {
                  "name": "blockNumber",
                  "type": "uint64"
              },
              {
                  "name": "blockHash",
                  "type": "bytes32"
              },
              {
                  "name": "dep",
                  "type": "uint96"
              },
              {
                  "name": "slotsCount",
                  "type": "uint64"
              },
              {
                  "name": "resultsCount",
                  "type": "uint64"
              },
              {
                  "name": "currentCylinderIndex",
                  "type": "uint64"
              },
              {
                  "name": "jackpot",
                  "type": "uint96"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getGameStates",
          "outputs": [
              {
                  "name": "blockNumber",
                  "type": "uint64"
              },
              {
                  "name": "blockHash",
                  "type": "bytes32"
              },
              {
                  "name": "dep",
                  "type": "uint96[]"
              },
              {
                  "name": "slotsCount",
                  "type": "uint64[]"
              },
              {
                  "name": "resultsCount",
                  "type": "uint64[]"
              },
              {
                  "name": "currentCylinderIndex",
                  "type": "uint64[]"
              },
              {
                  "name": "jackpot",
                  "type": "uint96[]"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getTotalCylindersCount",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [
              {
                  "name": "i",
                  "type": "uint256"
              }
          ],
          "name": "getUnfinished",
          "outputs": [
              {
                  "name": "game",
                  "type": "uint256"
              },
              {
                  "name": "blockNumber",
                  "type": "uint256"
              },
              {
                  "name": "cylinder",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "getUnfinishedCount",
          "outputs": [
              {
                  "name": "",
                  "type": "uint256"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      },
      {
          "constant": true,
          "inputs": [],
          "name": "testRandom",
          "outputs": [
              {
                  "name": "numbers",
                  "type": "uint256[]"
              }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
      }
  ], provider);

      // GET Donuts Played
      const game = await donutContractCall.getTotalCylindersCount();
      console.log((game).toString());
  
//SIGNER

  
  const signer = new Wallet(process.env.PRIVATE_KEY, provider);
  const donutContractSigner = new Contract('0xA1eD62e5348A4db7883DAB9F84cF53a039fFfccd', [
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "game",
                "type": "uint256"
            }
        ],
        "name": "withdrawFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "BETS",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "game",
                "type": "uint256"
            },
            {
                "name": "_idx",
                "type": "int256"
            }
        ],
        "name": "getCylinder",
        "outputs": [
            {
                "name": "blockNumber",
                "type": "uint64"
            },
            {
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "name": "dep",
                "type": "uint96"
            },
            {
                "name": "index",
                "type": "uint64"
            },
            {
                "name": "deps",
                "type": "address[]"
            },
            {
                "name": "unlucky",
                "type": "uint8"
            },
            {
                "name": "jackpot",
                "type": "int96"
            },
            {
                "name": "lastDepTime",
                "type": "uint64"
            },
            {
                "name": "status",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "game",
                "type": "uint256"
            },
            {
                "name": "idxFrom",
                "type": "uint256"
            },
            {
                "name": "idxTo",
                "type": "uint256"
            }
        ],
        "name": "getCylinders",
        "outputs": [
            {
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "name": "dep",
                "type": "uint96"
            },
            {
                "name": "index",
                "type": "uint64[]"
            },
            {
                "name": "deps",
                "type": "address[]"
            },
            {
                "name": "unlucky",
                "type": "uint8[]"
            },
            {
                "name": "jackpot",
                "type": "int96[]"
            },
            {
                "name": "lastDepTime",
                "type": "uint64[]"
            },
            {
                "name": "status",
                "type": "uint8[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "game",
                "type": "uint256"
            }
        ],
        "name": "getGameState",
        "outputs": [
            {
                "name": "blockNumber",
                "type": "uint64"
            },
            {
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "name": "dep",
                "type": "uint96"
            },
            {
                "name": "slotsCount",
                "type": "uint64"
            },
            {
                "name": "resultsCount",
                "type": "uint64"
            },
            {
                "name": "currentCylinderIndex",
                "type": "uint64"
            },
            {
                "name": "jackpot",
                "type": "uint96"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getGameStates",
        "outputs": [
            {
                "name": "blockNumber",
                "type": "uint64"
            },
            {
                "name": "blockHash",
                "type": "bytes32"
            },
            {
                "name": "dep",
                "type": "uint96[]"
            },
            {
                "name": "slotsCount",
                "type": "uint64[]"
            },
            {
                "name": "resultsCount",
                "type": "uint64[]"
            },
            {
                "name": "currentCylinderIndex",
                "type": "uint64[]"
            },
            {
                "name": "jackpot",
                "type": "uint96[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTotalCylindersCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "getUnfinished",
        "outputs": [
            {
                "name": "game",
                "type": "uint256"
            },
            {
                "name": "blockNumber",
                "type": "uint256"
            },
            {
                "name": "cylinder",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getUnfinishedCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "testRandom",
        "outputs": [
            {
                "name": "numbers",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
], signer);

//CANCEL BET

//const tx = await  donutContractSigner.withdrawFrom(1);
//const receipt = await tx.wait();


//PLAY DONUT 0.01 MATIC
await signer.sendTransaction({ to: '0xA1eD62e5348A4db7883DAB9F84cF53a039fFfccd', value: Utils.parseEther("0.01") }, function (err, result) {


});

}


main();