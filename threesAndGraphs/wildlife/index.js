function buildHash(arr) {

    var result = {};

    if (!arr || arr.length == 0) {
        return result;
    }

    var i = 0;
    var j = 0;

    while (i < arr.length) {
        var j = i + 1;
        var current = arr[i];
        var current2 = arr[j];
        var counts = 1;

        while (current == current2 && j < arr.length) {
            current2 = arr[j];

            if (current == current2) {
                counts++;
            }

            j++;
        }

        if (result[current]) {
            return result;
        }

        result[current] = counts;
        i = i + counts;

    }

    return result;
}


//asumo que los dos arrays no son nulos y que tienen el mismo length
function buildPairs(arr1, arr2, total) {
    var result = [];
    var hash = buildHash(arr2);

    arr1.forEach(element => {
        var rest = total - element;
        var repetitions = hash[rest];
        if (repetitions) {
            for (var i = 0; i < repetitions; i++) {
                result.push([element, rest]);
            }
        }
    });

    return result;
}