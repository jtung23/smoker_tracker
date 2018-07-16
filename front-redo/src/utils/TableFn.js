export default {

		// takes string
		// lowercase first value
		// uppercase first value of second word
		// removes whitespaces

		camelCase: function(str) {
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
				return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
			}).replace(/\s+/g, '');
		},
    // sets up data template based on Cols and returns object
    createDataObj: function(arr) {
		let obj = {}
		arr.forEach(item => {
			obj[item.accessor] = ''
		})
		return obj
		},
    // createDataObj: function(arr) {
		// 	let obj = {}
		// 	arr.forEach(item => {
		// 		obj[item.dataField] = ''
		// 	})
		// 	return obj
		// }
		addEditable: function(arr, editableMethod) {
			arr.forEach(item => {
				item.Cell = editableMethod
			})
			return arr
		}
}