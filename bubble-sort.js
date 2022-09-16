function bubbleSort(array) {
let ok = array.length
    for (let i = 0; i < ok; i++) {
        for (let j = 0; j < ok; j++) {
            if (array[j] > array[j + 1]) {
                let what = array[j]
                array[j] = array[j + 1]
                array[j + 1] = what
        }
    }
}
    return array
}

module.exports = bubbleSort
