// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.
// let a = 10;
// let newArr=[];
// for (let i = 0; i < 1000; i++) {
//     if (i % a === 0) {
//     newArr.push(i);
//     }
// }
// console.log(newArr);


// 3-7 saylı tapşırıqlar bu array üzərindən işləniləcək:
// const arr = [2, 4, 5, 9, 1];

// 3. Bu massivin minimum elementini tapın: 

// const arr = [2, 4, 5, 9, 1];
// let minum=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<minum){
//         minum=arr[i]
//     }
// }
// console.log(minum);

// 4. Bu massivin maksimum elementini tapın

// const arr = [2, 4, 5, 9, 1];
// let max=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max);

// 5. Bu massivin minimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];
// let minum= arr[0];
// let index =0;

// for(let x in arr){
//     if(minum> arr[x]){
//         minum=arr[x];
//         index=x;

//     }
// }
// console.log(index);


// 6. Bu massivin maksimum elementinin indeksini tapın.

// const arr = [2, 4, 5, 9, 1];
// let max = arr[0];
// let index = 0;

// for (let x in arr) {
//     if (max < arr[x]) {
//         max = arr[x];
//         index = x;

//     }
// }
// console.log(index);

// 7. Tək indeksli massiv elementlərinin cəmini hesablayın

// const arr = [2, 4, 5, 9, 1];
// let result =0;
// for(let x in arr){
//     if(x %2 == 1){
//         result+=arr[x];
//     }
// }
// console.log(result);

// 8. Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.
// let sentences = "Mən Code Academy Tələbəsiyəm.";
// let newsentence = sentences.toLowerCase();
// console.log(newsentence); 
// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "
// let sentence = "            Mən Code Academydə Programing tədrisi alıram            ";
// let newsentence= sentence.trim();
// console.log(newsentence);
// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
// let sentence = "Mən Code Academy Tələbəsiyəm.";
// let newsentence= sentence.split(" ");
// console.log(newsentence);
// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.
// let sentence = "            Mən Code Academydə Programing tədrisi alıram            ";
// let newsentence = sentence.trim();
// let words = newsentence.split(" ");
// let newwords = words.join("");
// let newresult = newwords.length;
// console.log(newresult);