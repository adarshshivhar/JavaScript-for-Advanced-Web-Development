let arr = [1,1,2,2,3,5,4,4];

let removeDuplicate = arr.filter((item,index) => arr.indexOf(item) === index);

document.write(removeDuplicate);