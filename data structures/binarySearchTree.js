function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
    if (value > this.value) {
        if (!this.right) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
    }
    if (value < this.value) {
        if (!this.left) {
            this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
    }
}


function buildTree(sortedArray) {

    if (sortedArray.length == 1) {
        return new BinarySearchTree(sortedArray[0]);
    }

    if (sortedArray.length == 2) {
        var tree = new BinarySearchTree(sortedArray[0]);
        tree.insert(sortedArray[1]);
        return tree;
    }

    var middleLength = parseInt(sortedArray.length / 2);

    var middle = sortedArray[middleLength];
    var tree = new BinarySearchTree(middle);
    var right = buildTree(sortedArray.slice(middleLength + 1, sortedArray.length));
    var left = buildTree(sortedArray.slice(0, middleLength));

    tree.right = right;
    tree.left = left;

    return tree;
}



/*


123
length: 3
length/2: 1 -> l[1] = 2


1234
length: 4
length/2 = 2 -> l[2] = 3

1,2,3,4,5,6,7,8
-----------------
a)
       5
1234        678
---------------
b)
       5
  3          7

12  4     6   8
-------------------
b)
       5
    3          7

 1    4      6   8
  2
---------------------
                            50
                21                         70
        10          30                 60       80
            20          40

    ---------------------------------------------------------
                            22.5

            23                         70
         10                           60       80
           20


busco sucesor de 20 que no tiene hijos
    padre de 20 menor (10)
        parde de 10 es 23
            puede ser el sucesor algun otro que el 23?
                descendiente a la derecha de 23: no porque seria mas grande que 23
                descendiente a la izquierda de 23: el 10 no es, y otro desc a la izq de 10 seria mas chico que 10
                ancetro del 23:
                    si es mas chico que el 23: entonces 23 es un hijo derecho y todos los hijos del 23 son mas grandes que el ancestro (absurdo pues 10 es hijo del ancestro)
                    si es mas grande que el 23: no me sirve, perfiero el 23



puede el sucesor de 60 ser alguno otro que el 70?
    a la derecha del 70 no porque son mas grandes que 70
    arriba de 70:
        si es mas grande que 70 entonces 70 es hijo izquierdo



sucesor: minimo entre el sucesor a la derecha y sucesor arriba

    puede ser alguno a la derecha de los ancestros? no porque todos los que estan a la derecha de los ancestros son mas grandes que esos ancestros
    puede ser alguno a la izquierda de los ancestros?
        supongamos que si:
            entonces subi varios ancestros para arriba hasta llegar a un ancestero A y despues baje a un nodo B tal que

            n < b < A


            A
    B       |
            x
            |
            x
            |
            n


    entonces como B < A, B esta a la izquierda de A. como n esta debajo de A y n no es padre de B ni hijo de B entonces tiene qu ser n a la derecha de A
    lo cual es absurdo pues n < A

    conclusion: devolver el minimo entre los padres



*/