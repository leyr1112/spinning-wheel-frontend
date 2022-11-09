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
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "addJackpot",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "betToken",
		outputs: [
			{
				internalType: "contract IBEP20",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_token",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "emergencyWithdrawToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint8",
				name: "_pid",
				type: "uint8",
			},
		],
		name: "getBnbAmountOfPrize",
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
				name: "_user",
				type: "address",
			},
		],
		name: "getBnbAmountOfTotalBet",
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
				internalType: "uint256",
				name: "_pid",
				type: "uint256",
			},
		],
		name: "getPrizeInfo",
		outputs: [
			{
				components: [
					{
						internalType: "contract IBEP20",
						name: "rewardToken",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "amount",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "compPoint",
						type: "uint256",
					},
				],
				internalType: "struct SogSpinWheel.PrizeInfo",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "number",
				type: "uint256",
			},
		],
		name: "getRandomNumber",
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
				name: "_user",
				type: "address",
			},
		],
		name: "getUserInfo",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "totalBetBusd",
						type: "uint256",
					},
					{
						internalType: "uint256[]",
						name: "prize",
						type: "uint256[]",
					},
				],
				internalType: "struct SogSpinWheel.UserInfo",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "jackpotAmount",
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
		name: "owner",
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
		name: "pancakeFactory",
		outputs: [
			{
				internalType: "contract IPancakeFactory",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "pancakeRouter",
		outputs: [
			{
				internalType: "contract IPancakeRouter",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "setPrizeAmount",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_compPoint",
				type: "uint256",
			},
		],
		name: "setPrizeCompPoint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_pid",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "_rewardToken",
				type: "uint256",
			},
		],
		name: "setPrizeRewardToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_treasuryAdd",
				type: "address",
			},
		],
		name: "setTreasuryAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "sog",
		outputs: [
			{
				internalType: "contract IBEP20",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totBetAmount",
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
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "treasuryAdd",
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
		name: "treasuryBetTokenAmount",
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
				internalType: "uint256",
				name: "_busdAmount",
				type: "uint256",
			},
		],
		name: "wager",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "wbnb",
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
		name: "withdrawBnb",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "withdrawTreasury",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		stateMutability: "payable",
		type: "receive",
	},
];

const bettingAddress = "0x940AEda54F74fD8523216dA3E537F2aF0499C07B";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal, provider, selectedAccount;
let accounts = [];

var bettingContract;

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
	console.log(bettingContract)
}

function refreshData() {
	const web3 = new Web3(provider);
	bettingContract.methods.jackpotAmount().call().then(jptAmont => {
		console.log(jptAmont, typeof (jptAmont));
		const jptAmontStr = web3.utils.fromWei(jptAmont);
		console.log(jptAmontStr, typeof (jptAmontStr));
		$('#jackpot-amount').text(roundNum(jptAmontStr) + " BUSD");
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
			console.log("loop")
			controlLoop();
		}
	} else {
		// $('#enableMetamask').attr('disabled', true)
		console.log('no ethereum')
	}
}

function controlLoop() {
	refreshData()
	setTimeout(controlLoop, 5000)
}

async function fetchAccountData() {
	// Get a Web3 instance for the wallet
	const web3 = new Web3(provider);

	// Get connected chain id from Ethereum node
	const chainId = await web3.eth.getChainId();
	console.log(web3);

	if (chainId !== 97) {
		swal({
			type: "error",
			title: "Wrong network! Switch to BSC Mainnet",
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
	});
}

jQuery(document).ready(function ($) {
	$(".wheel-standard").superWheel({
		slices: [
			{
				text: "<div class='font-20'>1 BTC</div><img src='https://spinning-wheel-frontend.vercel.app/images/btc-cut.png' style='margin-left: 6px; max-width: 35%;'/>",
				value: 12,
				message:
					"<img src='https://spinning-wheel-frontend.vercel.app/images/btc.png' style='margin-bottom: 0px; margin-right: 6px; width: 24px'/>1 BTC",
				background: "#f4bc2188",
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
			color: "#020101",
		},
		outer: {
			width: 8,
			color: "#020101",
		},
		inner: {
			width: 8,
			color: "#020101",
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
		wager(web3.utils.toWei('1'));
	});

	$(document).on("click", ".wheel-standard-spin-button-10", function (e) {
		const web3 = new Web3(provider);
		wager(web3.utils.toWei('10'));
	});

	$(".wheel-standard").superWheel("onStep", function (results) {
		if (typeof tick.currentTime !== "undefined") tick.currentTime = 0;

		tick.play();
	});

	$(".wheel-standard").superWheel("onComplete", function (results) {
		swal({
			type: "success",
			title: "<span style='font-size: 40px'>You Win</span>",
			html: results.message,
			confirmButtonText: "SPIN AGAIN",
			footer:
				"<b>Spin x 10 to win <span style='color: #ff931e;'>$12000</span> Jackpot</b>",
		});
	});
});
