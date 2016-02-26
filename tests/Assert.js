export default class Assert {
  static equals(expected, actual){
    var result = (expected === actual);
    return  result ? result : console.log('Expected: ', expected, '\nActual: ', actual);
  }
  static notEquals(expected, actual){
    return (expected !== actual);
  }
  static isTrue(value){
    return (value === true);
  }
  static isFalse(value){
    return (value === false);
  }
  static isNull(value){
    return (value === null);
  }
  static isUndefined(value){
    return (value === undefined);
  }
}
