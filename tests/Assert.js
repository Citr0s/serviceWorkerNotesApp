export default class Assert {
  static equals(expected, actual){
    return expected === actual;
  }
  static notEquals(expected, actual){
    return expected !== actual;
  }
  static isTrue(value){
    return value === true;
  }
  static isFalse(value){
    return value === false;
  }
  static isNull(value){
    return value === null;
  }
  static isUndefined(value){
    return value === undefined;
  }
}
