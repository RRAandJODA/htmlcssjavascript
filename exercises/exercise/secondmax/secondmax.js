function secondMax(arr)
{
    var max= arr[0] ;
    var max2= arr[0];

    for(i=0;i<arr.length;i++){ 
        if (arr[i] > max){
            max2 = max;
            max = arr[i];
        }
        if(arr[i] > max2 && arr[i] < max){
            max2  = arr[i];
        }
    }

    return max2;
}
