define(["./core"], function (jSharp) {
	
	function String() {

	}
	
	String.Format = function (format) {
		if (typeof format !== "string") { jSharp.error("Format must be String"); }
		if (arguments.length === 1) { jSharp.error("Must Supply at least one Argument"); }
		var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
		if (!validateArguments(objectArg)) { jSharp.error("Invalid Arguments"); }

		var formatted = format;

		for (var i = 0; i < objectArg.length; i++) {
			formatted = formatted.replace("{" + i + "}", objectArg[i]);
		}
		return formatted;
	};
	
	function validateArguments(args) {
		var valid = true;
		for (var i = 0; i < args.length; i++) {
			var item = args[i];
			if (jSharp.isArray(item) || typeof item === "object" || typeof item === "function") {
				valid = false;
				continue;
			}
		}
		return valid;
	}

	jSharp.String = String;

	return jSharp;
});