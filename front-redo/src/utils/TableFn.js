export default {
  
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