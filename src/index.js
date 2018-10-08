const createEnumerableProperty = (propertyName) => {
    return propertyName;
    
};
const createNotEnumerableProperty = (propertyName) => {
    propertyName = Symbol();
    return propertyName;
};
const createProtoMagicObject = () => {
    let x = function(){};
    x.prototype = x.__proto__;
    return x;
};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return null;
};
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