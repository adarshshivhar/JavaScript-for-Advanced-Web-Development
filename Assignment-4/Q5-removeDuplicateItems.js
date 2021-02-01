var arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
var removeDuplicate = [];

for(let i=0;i<arr.length;i++){
    if(!removeDuplicate.includes(arr[i])) {
        removeDuplicate.push(arr[i]);
    }
}

document.write(`Original Array: ${arr}`);
document.write('<br/>');
document.write('<br/>');
document.write(`Array After remove Duplicate: ${removeDuplicate}`);