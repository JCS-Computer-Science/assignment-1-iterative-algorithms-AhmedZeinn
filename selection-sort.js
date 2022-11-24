function selectionSort(array) {


	let c = array.length

	for(let i = 0; i < c; i++){

		let selection = i
		for(let j = i+1; j < c; j++){
			if(array[j] < array[selection]){
				wow = j
			}
		}

		if (selection != i) {
			let s = array[i]
			array[i] = array[selection]
			array[selection] = s
		}
	}
	
	return array;
}
	



module.exports = selectionSort;
