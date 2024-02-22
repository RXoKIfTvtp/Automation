
(function () {
	function callWhenReady(callback) {
		setTimeout(function () {
			const s = ["ui-loader", "ui-mapfade"];
			for (var i = 0; i < s.length; i++) {
				const e = document.getElementById(s[i]);
				if (e && window.getComputedStyle(e).display !== "none") {
					callWhenReady(callback);
					return;
				}
			}
			callback();
		}, 100);
	}
	
	function main() {
		console.log("Hello from the other side.");
		window.requestExit();
	}
	callWhenReady(main);
})();

