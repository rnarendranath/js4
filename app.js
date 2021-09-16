let n = parseInt(prompt('Enter The Count Of Names To Be Inserted: '))
let names = []
for(let i = 0;i<n;i++){
    names.push(prompt('Enter Name:'))
}
alert(`Given Array : ${names}\n
Sorted in Ascending Order : ${names.sort()}\n
Sorted in Descending Order : ${names.sort().reverse()}
`)