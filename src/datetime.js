define(["./core"], function (jSharp) {
	function DateTime() {
		var datetime,
			_date,//Object
			_day,//Number
			_dayofWeek,//Enum - String
			_dayofYear,//Number
			_hour,//Number
			_kind = jSharp.DateTimeKind.Local,//DayTimeKind
			_millisecond,//Number
			_minute,//Number
			_month,//Number
			_second,//Number
			_ticks,//Number
			_timeOfDay,//TimeSpan
			_year,//Number
			year,
			month,
			day,
			hour,
			minute,
			second,
			millsecond,
			kind,
			utc,
			ticks,
			NewDate = Date;

		function validateDatetimeArgs(args) {
			var valid = true;
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
						datetime = new Date(ticks);
						utc = Date.UTC(datetime.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), datetime.getUTCSeconds(), datetime.getUTCMilliseconds());
						datetime = new Date(utc);
					} else {
						datetime = new Date(ticks);
					}
					_kind = kind;
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
					datetime = new Date(year, month - 1, day);
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
					datetime = new Date(year, month - 1, day, hour, minute, second);
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
					datetime = new Date(year, month - 1, day, hour, minute, second, millsecond);
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
						datetime = new Date(year, month - 1, day, hour, minute, second, millsecond);
						utc = Date.UTC(datetime.getUTCFullYear(), datetime.getUTCMonth(), datetime.getUTCDate(), datetime.getUTCHours(), datetime.getUTCMinutes(), datetime.getUTCSeconds(), datetime.getUTCMilliseconds());
						datetime = new Date(utc);
					} else {
						datetime = new Date(year, month - 1, day, hour, minute, second, millsecond);
					}
					_kind = kind;
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
				_date = "";//Object
				_day = datetime.getDate();//Number
				_dayofWeek = getDayofWeek(datetime.getDay());//Enum - String
				_dayofYear = 0;//Number
				_hour = datetime.getHours();//Number
				_millisecond = datetime.getMilliseconds();//Number
				_minute = datetime.getMinutes();//Number
				_month = datetime.getMonth() + 1;//Number
				_second = datetime.getSeconds();//Number
				_ticks = Date.parse(datetime);//Number
				_timeOfDay = "";//TimeSpan
				_year = datetime.getFullYear();//Number
			}
		}

		if (validateDatetimeArgs(arguments)) {
			setFields();
		} else {
			jSharp.error("Invalid Arguments");
		}

		return {
			Date: _date,
			Day: _day,
			DayofWeek: _dayofWeek,
			DayofYear: _dayofYear,
			Hour: _hour,
			Kind: _kind,
			Millisecond: _millisecond,
			Minute: _minute,
			Month: _month,
			Second: _second,
			Ticks: _ticks,
			TimeOfDay: _timeOfDay,
			Year: _year
		};
	}

	DateTime.Today = function () {

	};

	DateTime.Now = function () {

	};

	DateTime.UtcNow = function () {

	};

	jSharp.DateTime = DateTime;

	return jSharp;
});