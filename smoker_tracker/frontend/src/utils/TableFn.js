export default {

		camelCase: function(str) {
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
				return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
			}).replace(/\s+/g, '');
		},
		// ***UNUSED****
		// handling when a new time is picked in the modal
		handleTimeChange: function(a, date) {
			let hours = date.getHours().toString()
			let minutes = date.getMinutes().toString()
			if (hours < 10) {
				hours = "0" + hours
			}
			if (minutes < 10) {
				minutes = "0" + minutes
			}
			let start = hours + ":" + minutes
			return start
		}
}