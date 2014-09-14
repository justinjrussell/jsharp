define(function () {

	var jSharp = {
		
		DateTimeKind: {
			Local: "Local",
			Unspecified: "Unspecified",
			Utc: "Utc"
		},
		DayOfWeek: {
			Friday: "Friday",
			Monday: "Monday",
			Saturday: "Saturday",
			Sunday: "Sunday",
			Thursday: "Thursday",
			Tuesday: "Tuesday",
			Wednesday: "Wednesday"
		},
		isArray: function (o) {
			return Object.prototype.toString.call(o) === "[object Array]";
		},
		error: function (msg) {
			throw new Error(msg);
		},
	};

	return jSharp;
});