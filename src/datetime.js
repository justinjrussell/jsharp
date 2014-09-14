define(["./core"], function (jSharp) {
	function DateTime() {
		var NewDate = Date;
		var datetime,
			_Date,//Datetime Object
			_Day,
			_DayofWeek,
			_DayofYear,
			_Hour,
			_Kind = jSharp.DateTimeKind.Local,
			_Millisecond,
			_Minute,
			_Month,
			_Second,
			_Ticks,
			_TimeOfDay,//TODO - Implement TimeSpan
			_Year;

		function validateDatetimeArgs(args) {
			var valid = true,
				year,
				month,
				day,
				hour,
				minute,
				second,
				millsecond,
				kind,
				utc,
				ticks;
			switch (args.length) {
				case 1:
					//DateTime(ticks:long)
					ticks = arguments[0][0];
					if (typeof ticks !== "number") {
						valid = false;
					}
					datetime = new NewDate(ticks);
					break;
				case 2:
					//DateTime(ticks:long, kind:DateTimeKind)
					ticks = arguments[0][0];
					kind = arguments[0][1];
					if (typeof ticks !== "number" ||
						typeof kind !== "string") {
						valid = false;
					}
					if (kind === jSharp.DateTimeKind.Utc) {
						datetime = new NewDate(ticks);
						utc = Date.UTC(datetime.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), datetime.getUTCSeconds(), datetime.getUTCMilliseconds());
						datetime = new NewDate(utc);
					} else {
						datetime = new NewDate(ticks);
					}
					_Kind = kind;
					break;
				case 3:
					//DateTime(year:int, month:int, day:int)
					year = arguments[0][0];
					month = arguments[0][1];
					day = arguments[0][2];
					if (typeof year !== "number" ||
						typeof month !== "number" ||
						typeof day !== "number") {
						valid = false;
					}
					datetime = new NewDate(year, month - 1, day, 12, 0, 0);
					break;
				case 4:
					//DateTime(year:int, month:int, day:int, calendar:Calendar)
					//TODO - Implement Calendar
					valid = false;
					break;
				case 5:
					valid = false;
					break;
				case 6:
					//DateTime(year:int, month:int, day:int, hour:int, minute:int, second:int)
					year = arguments[0][0];
					month = arguments[0][1];
					day = arguments[0][2];
					hour = arguments[0][3];
					minute = arguments[0][4];
					second = arguments[0][5];
					if (typeof year !== "number" ||
						typeof month !== "number" ||
						typeof day !== "number" ||
						typeof hour !== "number" ||
						typeof minute !== "number" ||
						typeof second !== "number") {
						valid = false;
					}
					datetime = new NewDate(year, month - 1, day, hour, minute, second);
					break;
				case 7:
					//DateTime(year:int, month:int, day:int, hour:int, minute:int, second:int, millisecond:int)
					year = arguments[0][0];
					month = arguments[0][1];
					day = arguments[0][2];
					hour = arguments[0][3];
					minute = arguments[0][4];
					second = arguments[0][5];
					millsecond = arguments[0][6];
					if (typeof year !== "number" ||
						typeof month !== "number" ||
						typeof day !== "number" ||
						typeof hour !== "number" ||
						typeof minute !== "number" ||
						typeof second !== "number" ||
						typeof millisecond !== "number") {
						valid = false;
					}
					datetime = new NewDate(year, month - 1, day, hour, minute, second, millsecond);
					break;
				case 8:
					//DateTime(year:int, month:int, day:int, hour:int, minute:int, second:int, millisecond:int, kind:DateTimeKind)
					year = arguments[0][0];
					month = arguments[0][1];
					day = arguments[0][2];
					hour = arguments[0][3];
					minute = arguments[0][4];
					second = arguments[0][5];
					millsecond = arguments[0][6];
					kind = arguments[0][7];
					if (typeof year !== "number" ||
						typeof month !== "number" ||
						typeof day !== "number" ||
						typeof hour !== "number" ||
						typeof minute !== "number" ||
						typeof second !== "number" ||
						typeof millisecond !== "number" ||
						typeof kind !== "string") {
						valid = false;
					}
					if (kind === jSharp.DateTimeKind.Utc) {
						datetime = new NewDate(year, month - 1, day, hour, minute, second, millsecond);
						utc = Date.UTC(datetime.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), datetime.getUTCSeconds(), datetime.getUTCMilliseconds());
						datetime = new NewDate(utc);
					} else {
						datetime = new NewDate(year, month - 1, day, hour, minute, second, millsecond);
					}
					_Kind = kind;
					break;
				case 9:
					//DateTime(year:int, month:int, day:int, hour:int, minute:int, second:int, millisecond:int, calendar:Calendar, kind:DateTimeKind)
					//TODO - Implement Calendar
					valid = false;
					break;
			}

			return valid;
		}

		function getDayofWeek(day) {
			switch (day) {
				//Sunday
				case 0:
					return jSharp.DayOfWeek.Sunday;
					//Monday
				case 1:
					return jSharp.DayOfWeek.Monday;
					//Tuesday
				case 2:
					return jSharp.DayOfWeek.Tuesday;
					//Wednesday
				case 3:
					return jSharp.DayOfWeek.Wednesday;
					//Thursday
				case 4:
					return jSharp.DayOfWeek.Thursday;
					//Friday
				case 5:
					return jSharp.DayOfWeek.Friday;
					//Saturday
				case 6:
					return jSharp.DayOfWeek.Saturday;
			}
		}

		function setFields() {
			if (datetime !== undefined) {
				_Date = "";
				_Day = datetime.getDate();
				_DayofWeek = getDayofWeek(datetime.getDay());
				_DayofYear = 0;
				_Hour = datetime.getHours();
				_Millisecond = datetime.getMilliseconds();
				_Minute = datetime.getMinutes();
				_Month = datetime.getMonth() + 1;
				_Second = datetime.getSeconds();
				_Ticks = Date.parse(datetime);
				_TimeOfDay = "";
				_Year = datetime.getFullYear();
			}
		}

		if (validateDatetimeArgs(arguments)) {
			setFields();
		} else {
			jSharp.error("Invalid Arguments");
		}

		return {
			Date: _Date,
			Day: _Day,
			DayofWeek: _DayofWeek,
			DayofYear: _DayofYear,
			Hour: _Hour,
			Kind: _Kind,
			Millisecond: _Millisecond,
			Minute: _Minute,
			Month: _Month,
			Second: _Second,
			Ticks: _Ticks,
			TimeOfDay: _TimeOfDay,
			Year: _Year,
			Add: function () { },
			AddDays: function () { },
			AddHours: function () { },
			AddMilliseconds: function () { },
			AddMinutes: function () { },
			AddMonths: function () { },
			AddSeconds: function () { },
			AddTicks: function () { },
			AddYears: function () { },
			ToShortDateString: function () { },
			ToShortTimeString: function () { }
		};
	}

	DateTime.Today = function () {

	};

	DateTime.Now = function () {

	};

	DateTime.UtcNow = function () {

	};

	DateTime.DaysInMonth = function () {

	};

	DateTime.IsLeapYear = function () {

	};

	jSharp.DateTime = DateTime;

	return jSharp;
});