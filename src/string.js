define(["./core"], function (jSharp) {
	jSharp.String = {
		Format: function (format) {
			if (typeof format !== "string") { throw new Error("Format must be String"); }
			if (arguments.length === 1) { throw new Error("Must Supply at least one Argument"); }
			var objectArg = Array.prototype.slice.call(arguments).splice(1, arguments.length);
			if (!validateArguments(objectArg)) { throw new Error("Invalid Arguments"); }

			var sresult = format;

			for (var i = 0; i < objectArg.length; i++) {
				sresult = sresult.replace("{" + i + "}", objectArg[i]);
			}
			return sresult;
		}
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


	return jSharp;
});