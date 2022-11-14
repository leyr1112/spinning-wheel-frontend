const bep20ABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "account",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getOwner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				internalType: "address",
				name: "recipient",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const bettingABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "addJackpot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "emergencyWithdrawToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "setPrizeAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_compPoint",
				"type": "uint256"
			}
		],
		"name": "setPrizeCompPoint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardToken",
				"type": "uint256"
			}
		],
		"name": "setPrizeRewardToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_treasuryAdd",
				"type": "address"
			}
		],
		"name": "setTreasuryAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_busdAmount",
				"type": "uint256"
			}
		],
		"name": "wager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawBnb",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawTreasury",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "betToken",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_pid",
				"type": "uint8"
			}
		],
		"name": "getBnbAmountOfPrize",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getBnbAmountOfTotalBet",
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
		"name": "getHistoryLength",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "getPrizeInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "contract IBEP20",
						"name": "rewardToken",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "compPoint",
						"type": "uint256"
					}
				],
				"internalType": "struct SogSpinWheel.PrizeInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "number",
				"type": "uint256"
			}
		],
		"name": "getRandomNumber",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "totalBetBusd",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "prize",
						"type": "uint256[]"
					}
				],
				"internalType": "struct SogSpinWheel.UserInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "jackpotAmount",
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
		"name": "owner",
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
		"name": "pancakeFactory",
		"outputs": [
			{
				"internalType": "contract IPancakeFactory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pancakeRouter",
		"outputs": [
			{
				"internalType": "contract IPancakeRouter",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "prizeHistory",
		"outputs": [
			{
				"internalType": "address",
				"name": "rewardToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sog",
		"outputs": [
			{
				"internalType": "contract IBEP20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totBetAmount",
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
		"name": "treasuryAdd",
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
		"name": "treasuryBetTokenAmount",
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
		"name": "wbnb",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const bettingAddress = "0x7CAA8679CF501D986a68ABF90B9b34880973eC12";
const busdAddress = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal, provider, selectedAccount;
let accounts = [];

var bettingContract, busdContract;

var isApproved = false;
var history = [];
var isDomoMode = true;

function init() {
	const providerOptions = {
		walletconnect: {
			package: WalletConnectProvider,
			options: {
				// Mikko's test key - don't copy as your mileage may vary
				infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
			},
		},

		fortmatic: {
			package: Fortmatic,
			options: {
				// Mikko's TESTNET api key
				key: "pk_test_A3045BC3289C81DB",
			},
		},
	};

	web3Modal = new Web3Modal({
		cacheProvider: false, // optional
		providerOptions, // required
	});
}

function loadContracts() {
	web3 = window.web3
	bettingContract = new web3.eth.Contract(bettingABI, bettingAddress);
	busdContract = new web3.eth.Contract(bep20ABI, busdAddress);
}

function refreshData() {

	const web3 = new Web3(provider);

	busdContract.methods.allowance(selectedAccount, bettingAddress).call().then(result => {
		const resultStr = web3.utils.fromWei(result)
		isApproved = Number(resultStr) > 0
		if (isApproved || isDomoMode) {
			$("#spin-text").text("SPIN");
			$("#spin-text-10").text("SPIN X 10");
		}
		else {
			$("#spin-text").text("APPROVE");
			$("#spin-text-10").text("APPROVE");
		}
	}).catch((e) => {
		console.log(e)
	})

	bettingContract.methods.jackpotAmount().call().then(jptAmont => {
		const jptAmontStr = web3.utils.fromWei(jptAmont);
		$('#jackpot-amount').text(roundNum(jptAmontStr) + " BUSD");
	}).catch((e) => {
		console.log(e)
	})

	bettingContract.methods.getHistoryLength().call().then(length => {
		if (isDomoMode) {
			return;
		}
		else {
			for (let index = 1; index < 6; index++) {
				$('#history' + index).css('display', 'none');
				if (index > length) {
					continue;
				}
				bettingContract.methods.prizeHistory(length - index).call().then(historyData => {
					$('#history' + index).css('display', 'flex');
					$('#history' + index).find('.history-user').text(historyData.user);
					const amountStr = web3.utils.fromWei(historyData.amount);
					const tokenAddress = historyData.rewardToken;
					if (tokenAddress == '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/btc.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' BTC');
					}
					else if (tokenAddress == '0x2170Ed0880ac9A755fd29B2688956BD959F933F8') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/eth.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' ETH');
					}
					else if (tokenAddress == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/bnb.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' BNB');
					}
					else if (tokenAddress == '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/busd.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' BUSD');
					}
					else if (tokenAddress == '0xbA2aE424d960c26247Dd6c32edC70B295c744C43') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/doge.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' DOGE');
					}
					else if (tokenAddress == '0x42bfa18f3f7D82BD7240d8Ce5935d51679C5115d') {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' S2K');
					}
					else {
						$('#history' + index).find('.coin-image').attr('src', "<img src='https://spinning-wheel-frontend.vercel.app/images/sog.png")
						$('#history' + index).find('.history-prize').text(amountStr + ' SOG');
					}
				}).catch((e) => {
					console.log(e)
				})
			}
		}

	}).catch((e) => {
		console.log(e)
	})
}

async function loadWeb3() {
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum)
		// $('#enableMetamask').attr('disabled', false)
		if (window.ethereum.selectedAddress !== null) {
			await onConnect();
			controlLoop();
		}
	} else {
		// $('#enableMetamask').attr('disabled', true)
		console.log('no ethereum')
	}
}

function controlLoop() {
	fetchAccountData()
	refreshData()
	setTimeout(controlLoop, 5000)
}

async function fetchAccountData() {
	// Get a Web3 instance for the wallet
	const web3 = new Web3(provider);

	// Get connected chain id from Ethereum node
	const chainId = await web3.eth.getChainId();

	if (chainId !== 97) {
		swal({
			type: "error",
			html: "Wrong network!<br />Switch to BSC",
		});
	}

	// Get list of accounts of the connected wallet
	accounts = await web3.eth.getAccounts();

	// MetaMask does not give you all accounts, only the selected account
	selectedAccount = accounts[0];
	var cutAcc = selectedAccount.replace(
		selectedAccount.substring(4, selectedAccount.length - 4),
		"..."
	);

	loadContracts();
	refreshData();

	$("#btn-connect").attr("onClick", "onDisconnect()");
	$("#btn-connect").text("Disconnect");
}

async function onConnect() {
	try {
		provider = await web3Modal.connect();
	} catch (e) {
		console.log("Could not get a wallet connection", e);
		return;
	}

	// Subscribe to accounts change
	provider.on("accountsChanged", (accounts) => {
		fetchAccountData();
	});

	// Subscribe to chainId change
	provider.on("chainChanged", (chainId) => {
		fetchAccountData();
	});

	// Subscribe to networkId change
	provider.on("networkChanged", (networkId) => {
		fetchAccountData();
	});

	await fetchAccountData();
}

async function onDisconnect() {
	// TODO: Which providers have close method?
	if (provider.close) {
		await provider.close();

		// If the cached provider is not cleared,
		// WalletConnect will default to the existing session
		// and does not allow to re-scan the QR code with a new wallet.
		// Depending on your use case you may want or want not his behavir.
		await web3Modal.clearCachedProvider();
		provider = null;
	}

	selectedAccount = null;
	window.location.reload();
}

window.addEventListener("load", async () => {
	init();
	loadWeb3();
	$("#btn-connect").attr("onClick", "onConnect()");
});

function roundNum(num) {
	if (num == 0) { return 0 };
	if (num < 1) {
		return parseFloat(num).toFixed(4);
	}
	return parseFloat(parseFloat(num).toFixed(2));
}

function wager(amount) {
	swal({
		type: "info",
		html: "Confirming...",
	});
	bettingContract.methods.wager(amount).send({ from: selectedAccount }).then(result => {
		bettingContract.methods.getUserInfo(selectedAccount).call().then(result => {
			const prizeId = result.prize[result.prize.length - 1]
			$(".wheel-standard").superWheel(
				"start",
				"value",
				Number(prizeId)
			);
		}).catch((e) => {
			console.log(e)
		})
	}).catch((e) => {
		console.log(e)
	}).finally(() => {
		console.log(1)
	})
}

function approve() {
	busdContract.methods.approve(bettingAddress, '1000000000000000000000000000000000000000').send({ from: selectedAccount }).then(result => {
		$("#spin-text").text("SPIN");
		$("#spin-text-10").text("SPIN X 10");
	}).catch((e) => {
		console.log(e)
	})
}

jQuery(document).ready(function ($) {
	$(".wheel-standard").superWheel({
		slices: [
			{
				text: "<div class='font-20'>1 BTC</div><img src='https://spinning-wheel-frontend.vercel.app/images/btc.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 12,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/btc.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>1 BTC",
				background: "transparent",
			},
			{
				text: "<div>5,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 8,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>5,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 3,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>100 BUSD",
				background: "transparent",
			},
			{
				text: "<img src='https://spinning-wheel-frontend.vercel.app/images/jackpot.png' style='max-width: 48%;'/>",
				value: 0,
				message: "JACKPOT",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 BNB</div><img src='https://spinning-wheel-frontend.vercel.app/images/bnb.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 2,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/bnb.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>1 BNB",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 4,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>100 BUSD",
				background: "transparent",
			},
			{
				text: "<div class='font-12'>80,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 7,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>80,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>200 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 10,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>200 SOG",
				background: "transparent",
			},
			{
				text: "<div class='font-10'>10,000,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 6,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>10,000,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 DOGE</div><img src='https://spinning-wheel-frontend.vercel.app/images/doge.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 5,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/doge.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>100 DOGE",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 ETH</div><img src='https://spinning-wheel-frontend.vercel.app/images/eth.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 1,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/eth.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>1 ETH",
				background: "transparent",
			},
			{
				text: "<div>1,000 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 9,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>1,000 SOG",
				background: "transparent",
			},
		],
		text: {
			size: 14,
			color: "#FFF",
			offset: 4,
		},
		line: {
			width: 6,
			color: "#202020",
		},
		outer: {
			width: 8,
			color: "#202020",
		},
		inner: {
			width: 8,
			color: "#202020",
		},
		marker: {
			background: "#00BCD4",
			animate: 0,
		},
		center: {
			width: 22,
			rotate: false,
			image: {
				url: "https://spinning-wheel-frontend.vercel.app/images/center.png",
				width: 22,
			},
			class: "wheel-standard-center",
		},
		selector: "value",
		width: 640,
	});

	var tick = new Audio(
		"https://spinning-wheel-frontend.vercel.app/media/tick.mp3"
	);

	$(document).on("click", ".wheel-standard-spin-button", function (e) {
		const web3 = new Web3(provider);
		if (isDomoMode) {
			$(".wheel-standard").superWheel(
				"start",
				"value",
				Math.floor(Math.random() * 12)
			);
		}
		else {
			if (isApproved) {
				wager(web3.utils.toWei('1'));
			}
			else {
				approve()
			}
		}
	});

	$(document).on("click", ".wheel-standard-spin-button-10", function (e) {
		const web3 = new Web3(provider);
		if (isDomoMode) {
			$(".wheel-standard").superWheel(
				"start",
				"value",
				Math.floor(Math.random() * 12)
			);
		}
		else {
			if (isApproved) {
				wager(web3.utils.toWei('10'));
			}
			else {
				approve()
			}
		}
	});

	$(".wheel-standard").superWheel("onStep", function (results) {
		if (typeof tick.currentTime !== "undefined") tick.currentTime = 0;

		tick.play();
	});

	$(".wheel-standard").superWheel("onComplete", function (results) {
		swal({
			type: "success",
			title: "You Win",
			html: '<b>' + results.message + '</b>',
			confirmButtonText: "SPIN AGAIN",
			footer:
				"<b>Spin x 10 to win <span style='color: #ff931e;'>$12000</span> Jackpot</b>",
		});
	});

	$(document).on("click", "#demo-on-btn", function (e) {
		isDomoMode = true;
		$("#demo-on-btn").css('background-color', '#ff931e');
		$("#demo-off-btn").css('background-color', '#202020');
		refreshData()
	});

	$(document).on("click", "#demo-off-btn", function (e) {
		isDomoMode = false;
		$("#demo-off-btn").css('background-color', '#ff931e');
		$("#demo-on-btn").css('background-color', '#202020');
		refreshData()
	});
});
