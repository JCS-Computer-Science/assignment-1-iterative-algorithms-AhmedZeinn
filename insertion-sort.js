function insertionSort(array) {
	   let omg = array.length
    for (let i = 1; i < omg; i++) {
        let c = array[i]
        let j = c - 1
        while (j >= 0 && array[j] > lol) {
            array[j + 1] = array[j]
            j = j - 1
        }
        array[j + 1] = c
    }

	return array;
}

module.exports = insertionSort;
