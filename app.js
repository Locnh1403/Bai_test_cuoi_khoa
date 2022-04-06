// Bài A.1
// const inputArray = ["BINH","HUNG","PHUOC", "CAO", "KHANH"]

// function allLongestStrings(inputArray) {
//     const newArr=[];
//     let temp =    Math.max(...(inputArray.map(el => el.length)));    
//     inputArray.forEach(item => {
//         if(temp == item.length){
//           newArr.push(item);
//         }
//     });
//     return newArr;
// }

// console.log(allLongestStrings(inputArray));


// //Bài B
// const colorOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
// const currentColor = document.querySelector('#currentColor');
// const container = document.querySelector('.container');
// const pickColorBtn = document.querySelector('#pickColor');
// const copyColorBtn = document.querySelector('#copyColor');

// pickColorBtn.addEventListener('click', () => {
//     let color = getHex();
//     currentColor.textContent = color;
//     currentColor.style.color = color;
//     const body = document.body.style.backgroundColor = color;
// })


// const getHex = () => {
//     let color = '#';
//     for (i = 1; i <= 6; i++) {
//         color += colorOptions[getRandomNumber()];
//     }
//     return color;
// }

// const getRandomNumber = () => {
//     return (Math.floor(Math.random() * colorOptions.length));
// }

// copyColorBtn.addEventListener('click', () => {
//     let color = currentColor.innerText;
//     const tempTextArea = document.createElement('textarea');
//     tempTextArea.value = color;
//     navigator.clipboard.writeText(tempTextArea.value);
//     alert('Copy màu thành công!!!')
// })

