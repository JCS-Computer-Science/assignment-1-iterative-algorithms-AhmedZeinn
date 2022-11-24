function bubbleSort(array) {
let bubble = array.length
    for (let i = 0; i < bubble; i++) {
        for (let j = 0; j < bubble; j++) {
            if (array[j] > array[j + 1]) {
                let c = array[j]
                array[j] = array[j + 1]
                array[j + 1] = c
        }
    }
}
    return array
}

module.exports = bubbleSort
