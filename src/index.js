// DO WHATEVER YOU WANT HERE 

const createEnumerableProperty = (propertyName) => {
    return propertyName;
    
};
const createNotEnumerableProperty = (propertyName) => {
    propertyName = Symbol();
    return propertyName;
};
const createProtoMagicObject = () => {
    
};
const incrementor = () => {
   
};
const asyncIncrementor = () => {};
const createIncrementer = () => {
  class Incrementer {
    constructor() {
        this.temp = 0;
        this.obj = {};
    }
    next () {
        this.temp++;
        this.obj.value = this.temp;
        return this.obj;
    }
};
return new Incrementer;
};
    
       
    

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {    
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {
  return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;