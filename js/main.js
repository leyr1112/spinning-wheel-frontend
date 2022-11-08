// Super Wheel Script
jQuery(document).ready(function ($) {
	$(".wheel-standard").superWheel({
		slices: [
			{
				text: "<div class='font-20'>1 BTC</div><img src='images/btc.png' style='margin-left: 6px; max-width: 36%;'/>",
				value: 12,
				message: "You win 1 BTC",
				background: "transparent",
			},
			{
				text: "<div>5,000,000</div><img src='images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 8,
				message: "You win 5,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 3,
				message: "You win 100 BUSD",
				background: "transparent",
			},
			{
				text: "<img src='images/jackpot.png' style='max-width: 48%;'/>",
				value: 0,
				message: "You win JACkPOT",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 BNB</div><img src='images/bnb.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 2,
				message: "You win 1 BNB",
				background: "transparent",
			},
			{
				text: "<div>100 BUSD</div><img src='images/busd.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 4,
				message: "You win 100 BUSD",
				background: "transparent",
			},
			{
				text: "<div class='font-14'>80,000,000</div><img src='images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 7,
				message: "80,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>200 SOG</div><img src='images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 10,
				message: "You win 200 SOG",
				background: "transparent",
			},
			{
				text: "<div class='font-12'>10,000,000,000</div><img src='images/s2k.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 6,
				message: "You win 10,000,000,000 S2K",
				background: "transparent",
			},
			{
				text: "<div>100 DOGE</div><img src='images/doge.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 5,
				message: "You win 100 DOGE",
				background: "transparent",
			},
			{
				text: "<div class='font-20'>1 ETH</div><img src='images/eth.png' style='margin-left: 6px; max-width: 18%;'/>",
				value: 1,
				message: "You win 1 ETH",
				background: "transparent",
			},
			{
				text: "<div>1,000 SOG</div><img src='images/sog.png' style='margin-left: 6px; max-width: 18%;'/>",
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
				url: "images/center.png",
				width: 24,
			},
			class: 'wheel-standard-center'
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
