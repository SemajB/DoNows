let alphaBack = function(array){
    array.sort(function(a, b){
        if(a < b){
            return 1
        }else{
            return -1
        }
    })
    return array.join()
}