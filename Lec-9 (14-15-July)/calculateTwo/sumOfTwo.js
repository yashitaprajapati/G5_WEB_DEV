function sumOfTwo(a,b){
    
    console.log(a+b)
  
    return a+b;
}

var xy = 2000;
(function(module,require){
    require("./path");
    function sumOfTwo(a,b){
    console.log(a+b)   
    return a/b;
}
 module.exports = { sumOfTwo}

}())
export default {sumOfTwo, xy};