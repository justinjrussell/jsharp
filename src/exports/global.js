define([
	"../core"
], function (jSharp) {
	var
		// Map over jSharp in case of overwrite
		_jSharp = window.jSharp,

		// Map over the J$ in case of overwrite
		_J$ = window.J$;

	jSharp.noConflict = function (deep) {
		if (window.J$ === jSharp) {
			window.J$ = _J$;
		}

		if (deep && window.jSharp === jSharp) {
			window.jSharp = _jSharp;
		}

		return jSharp;
	};

	// Expose jSharp and J$ identifiers, even in AMD
	// and CommonJS for browser emulators
	if (!noGlobal) {
		window.jSharp = window.J$ = jSharp;
	}
});
