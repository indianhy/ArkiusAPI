/*
 var nft_obj = {};

    function formatted_string(pad, str) {
      return (pad + str).slice(-pad.length);
    }

    var tf = ["True","False","True","False","True","True","False"]

    for(let i =1;i<100;i++){
      nft_obj[Object.keys(nft_obj).length + 1] = {

        "name": `Member ${i}`,
        "description": `Arkius Member`,
        "image": `https://ipfs.io/ipfs/QmPey2czyZyiDMa6MJtoVRFKPHfUHrZawr1ZMoh9AhJU1y?filename=Screenshot_1.png`,
        "external_url": "",
        "attributes": [
          {
            "trait_type": "Identified",
            "value": tf[i%7]
          },
          {
            "trait_type": "Certifier",
            "value": tf[(i+1)%7]
          },
          {
            "trait_type": "Entity",
            "value": tf[(i+2)%7]
          },
          {
           "trait_type": "Champion",
            "value": tf[(i+3)%7]
          },
          {
            "trait_type": "MembershipToken",
            "value": `Member ${i}`
          },
          {
            "trait_type": "PaymentPaid",
            "value": tf[(i+1)%7],
          },
          {
            "trait_type":"PaymentAmount",
            "value": 0,
          },
          {
            "trait_type": "ValuesPropose",
            "value": 1,
          },
          {
            "trait_type": "ValuesModify",
            "value": 0,
          },
          {
            "trait_type": "ValuesVote",
            "value": 0,
          },
          {
            "trait_type": "ValuesCommentReview",
            "value": 0,
          },
          {
            "trait_type": "CertificationsPropose",
            "value": 1,
          },
          {
            "trait_type": "CertificationsModify",
            "value": 0,
          },
          {
            "trait_type": "CertificationsVote",
            "value": 0,
          },
          {
            "trait_type": "CertificationsCommentReview",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsCreate",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsModify",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsVote",
            "value": 0,
          },
          {
            "trait_type": "ForumPostsReply",
            "value": 0,
          },
          {
            "trait_type": "ProposalsPetitions",
            "value": 0,
          },
          {
            "trait_type": "EntityCertificateToken",
            "value": 0,
          },
          {
            "trait_type": "BudgetVote",
            "value": 0,
          },
          {
            "trait_type": "BudgetModify",
            "value": 0,
          },
          {
            "trait_type": "BudgetCompensation",
            "value": 0,
          },
          {
            "trait_type": "BudgetCommentReview",
            "value": 0,
          },
          {
            "trait_type": "BudgetPropose",
            "value": 0,
          },
      ],
    }
}
  module.exports = nft_obj;*/
const tokenABI = [
                 	{
                 		"inputs": [],
                 		"stateMutability": "nonpayable",
                 		"type": "constructor"
                 	},
                 	{
                 		"anonymous": false,
                 		"inputs": [
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "_owner",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "_spender",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": false,
                 				"internalType": "uint256",
                 				"name": "_value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "Approval",
                 		"type": "event"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_spender",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "_amount",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "approve",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "success",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_to",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "_amount",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "transfer",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "success",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"anonymous": false,
                 		"inputs": [
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "_from",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": true,
                 				"internalType": "address",
                 				"name": "_to",
                 				"type": "address"
                 			},
                 			{
                 				"indexed": false,
                 				"internalType": "uint256",
                 				"name": "_value",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "Transfer",
                 		"type": "event"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_from",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "address",
                 				"name": "_to",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "uint256",
                 				"name": "_amount",
                 				"type": "uint256"
                 			}
                 		],
                 		"name": "transferFrom",
                 		"outputs": [
                 			{
                 				"internalType": "bool",
                 				"name": "success",
                 				"type": "bool"
                 			}
                 		],
                 		"stateMutability": "nonpayable",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_owner",
                 				"type": "address"
                 			},
                 			{
                 				"internalType": "address",
                 				"name": "_spender",
                 				"type": "address"
                 			}
                 		],
                 		"name": "allowance",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "remaining",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [
                 			{
                 				"internalType": "address",
                 				"name": "_address",
                 				"type": "address"
                 			}
                 		],
                 		"name": "balanceOf",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "decimals",
                 		"outputs": [
                 			{
                 				"internalType": "uint8",
                 				"name": "",
                 				"type": "uint8"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "name",
                 		"outputs": [
                 			{
                 				"internalType": "string",
                 				"name": "",
                 				"type": "string"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "ownerAddress",
                 		"outputs": [
                 			{
                 				"internalType": "address",
                 				"name": "",
                 				"type": "address"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "symbol",
                 		"outputs": [
                 			{
                 				"internalType": "string",
                 				"name": "",
                 				"type": "string"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	},
                 	{
                 		"inputs": [],
                 		"name": "totalSupply",
                 		"outputs": [
                 			{
                 				"internalType": "uint256",
                 				"name": "",
                 				"type": "uint256"
                 			}
                 		],
                 		"stateMutability": "view",
                 		"type": "function"
                 	}
                 ];

module.exports = tokenABI;