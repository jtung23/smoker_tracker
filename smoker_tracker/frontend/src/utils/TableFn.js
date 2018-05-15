export default {
  
    // sets up data template based on Cols and returns object
    createDataObj: function(arr) {
		let obj = {}
		arr.forEach(item => {
			obj[item.dataField] = ''
		})
		return obj
    }
}