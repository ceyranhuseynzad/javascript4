
const calculat=(array)=>{
    let min=array[0];
    let max=array[0];
    if(array.length !==0){
        for(let i=1; i<array.length; i++){
            if(min>array[i]){
                min=array[i];
            }
            if(max<array[i]){
                max=array[i]
            }
        }
        let ferq= max - min;
        console.log(ferq);
    }else{
        return "Array is empty!"
    }
}
console.log(calculate([1,2,3,4,5,6,7,8,9,10]));


