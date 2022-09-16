function insertionSort(array) {
	   let omg = array.length
    for (let i = 1; i < omg; i++) {
        let lol = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > lol) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = lol
    }

	return array;
}

module.exports = insertionSort;
