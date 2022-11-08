// Super Wheel Script
jQuery(document).ready(function ($) {
	$(".wheel-standard").superWheel({
		slices: [
			{
				text: "<div class='font-20'>1 BTC</div><img src='https://spinning-wheel-frontend.vercel.app/images/btc-cut.png' style='margin-left: 6px; max-width: 35%;'/>",
				value: 12,
				message: "You win 1 BTC",
				background: "#f4bc2188",
			},
			{
				text: "<div>5,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 8,
				message: "You win 5,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 3,
				message: "You win 100 BUSD",
				background: "transparent",
			},
			{
				text: "<img src='https://spinning-wheel-frontend.vercel.app/images/jackpot.png' style='max-width: 48%;'/>",
				value: 0,
				message: "You win JACkPOT",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 BNB</div><img src='https://spinning-wheel-frontend.vercel.app/images/bnb.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 2,
				message: "You win 1 BNB",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='https://spinning-wheel-frontend.vercel.app/images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 4,
				message: "You win 100 BUSD",
				background: "transparent",
			},
			{
				text: "<div class='font-14'>80,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 7,
				message: "80,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>200 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 10,
				message: "You win 200 SOG",
				background: "transparent",
			},
			{
				text: "<div class='font-12'>10,000,000,000</div><img src='https://spinning-wheel-frontend.vercel.app/images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 6,
				message: "You win 10,000,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 DOGE</div><img src='https://spinning-wheel-frontend.vercel.app/images/doge.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 5,
				message: "You win 100 DOGE",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 ETH</div><img src='https://spinning-wheel-frontend.vercel.app/images/eth.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 1,
				message: "You win 1 ETH",
				background: "transparent",
			},
			{
				text: "<div>1,000 SOG</div><img src='https://spinning-wheel-frontend.vercel.app/images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 9,
				message: "You win 1,000 SOG",
				background: "transparent",
			},
		],
		text: {
			size: 16,
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
			width: 24,
			rotate: false,
			image: {
				url: "https://spinning-wheel-frontend.vercel.app/images/center.png",
				width: 24,
			},
			class: "wheel-standard-center",
		},
		selector: "value",
		width: 640,
	});

	var tick = new Audio("media/tick.mp3");

	$(document).on("click", ".wheel-standard-spin-button", function (e) {
		$(".wheel-standard").superWheel(
			"start",
			"value",
			Math.floor(Math.random() * 12)
		);
		$(this).prop("disabled", true);
	});

	$(".wheel-standard").superWheel("onStart", function (results) {
		$(".wheel-standard-spin-button").text("Spinning...");
	});

	$(".wheel-standard").superWheel("onStep", function (results) {
		if (typeof tick.currentTime !== "undefined") tick.currentTime = 0;

		tick.play();
	});

	$(".wheel-standard").superWheel("onComplete", function (results) {
		swal({
			type: "success",
			title: "Congratulations!",
			html: results.message,
		});
		$(".wheel-standard-spin-button:disabled")
			.prop("disabled", false)
			.text("Spin");
	});
});

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
}

window.addEventListener("load", async () => {
	init();
	$("#btn-connect").attr("onClick", "onConnect()");
});
