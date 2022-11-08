const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

let web3Modal, provider, selectedAccount;
let accounts = [];

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

async function fetchAccountData() {
	// Get a Web3 instance for the wallet
	const web3 = new Web3(provider);

	// Get connected chain id from Ethereum node
	const chainId = await web3.eth.getChainId();

	// Get list of accounts of the connected wallet
	accounts = await web3.eth.getAccounts();

	// MetaMask does not give you all accounts, only the selected account
	selectedAccount = accounts[0];
	var cutAcc = selectedAccount.replace(
		selectedAccount.substring(4, selectedAccount.length - 4),
		"..."
	);

	$("#btn-connect").attr("onClick", "onDisconnect()");
	$("#btn-connect").text("Disconnect");
}

/**
	 * Connect wallet button pressed.
	 */
async function onConnect() {
	console.log("Opening a dialog", web3Modal);
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

/*Disconnect button pressed*/
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
	$("#btn-connect").attr("onClick", "onConnect()");
});

jQuery(document).ready(function ($) {
	$(".wheel-standard").superWheel({
		slices: [
			{
				text: "<div class='font-20'>1 BTC</div><img src='https://spinning-wheel-frontend.vercel.app/images/btc-cut.png' style='margin-left: 6px; max-width: 35%;'/>",
				value: 12,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/btc.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>1 BTC",
				background: "#f4bc2188",
			},
			{
				text: "<div>5,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 8,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>5,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 3,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>100 BUSD",
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
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/bnb.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>1 BNB",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 4,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>100 BUSD",
				background: "transparent",
			},
			{
				text: "<div class='font-12'>80,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 7,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>80,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>200 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 10,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>200 SOG",
				background: "transparent",
			},
			{
				text: "<div class='font-10'>10,000,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 6,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>10,000,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 DOGE</div><img src='https://spinning-wheel-frontend.vercel.app/images/doge.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 5,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/doge.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>100 DOGE",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 ETH</div><img src='https://spinning-wheel-frontend.vercel.app/images/eth.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 1,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/eth.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>1 ETH",
				background: "transparent",
			},
			{
				text: "<div>1,000 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 9,
				message: "<img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-bottom: -6px; margin-right: 6px; width: 24px'/>1,000 SOG",
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

	var tick = new Audio("https://spinning-wheel-frontend.vercel.app/media/tick.mp3");

	$(document).on("click", ".wheel-standard-spin-button", function (e) {
		$(".wheel-standard").superWheel(
			"start",
			"value",
			Math.floor(Math.random() * 12)
		);
	});

	$(document).on("click", ".wheel-standard-spin-button-10", function (e) {
		$(".wheel-standard").superWheel(
			"start",
			"value",
			Math.floor(Math.random() * 12)
		);
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
			footer: "<b>Spin x 10 to win <span style='color: #ff931e;'>$12000</span> Jackpot</b>"
		});
	});
});
