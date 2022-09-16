function selectionSort(array) {


	let nice = array.length

	for(let i = 0; i < nice; i++){

		let wow = i
		for(let j = i+1; j < nice; j++){
			if(array[j] < array[wow]){
				wow = j
			}
		}

		if (wow != i) {
			let what = array[i]
			array[i] = array[wow]
			array[wow] = what
		}
	}
	
	return array;
}
	



module.exports = selectionSort;
