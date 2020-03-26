export{}

let name: string = "";
console.log(`${typeof(name)} - ${name}`)

let count: number = 1000;
console.log(`${typeof(count)} - ${count}`)

let floatNumber: number = 10.00010;
console.log(`${typeof(floatNumber)} - ${floatNumber}`)

let decimalNumber: number = 0.00009093840982;
console.log(`${typeof(decimalNumber)} - ${decimalNumber}`)

let isTypeScript: boolean = true;
console.log(`${typeof(isTypeScript)} - ${isTypeScript}`)

let anyType: any = "";
console.log(`${typeof(anyType)} - ${anyType}`)

let dynamicType: any;
dynamicType = "";
dynamicType = (dynamicType as string).toUpperCase();

console.log(`${typeof(dynamicType)} - ${dynamicType}`)

let binary: number = 0b10101010;
console.log(`${typeof(binary)} - ${binary}`)

let hexaDecimal: number = 0x1ff0;
console.log(`${typeof(hexaDecimal)} - ${hexaDecimal}`)

let octal: number = 0o744;
console.log(`${typeof(octal)} - ${octal}`)

let arrayType: number[] = [1,2,3,4];
console.log(`${typeof(arrayType)} - ${arrayType}`)

let tupleType: [string,number,boolean] = ["Ram", 100, true]
console.log(`${typeof(tupleType)} - ${tupleType}`)

let arbitaryType: any = " Cool ";

arbitaryType = (<string>arbitaryType).repeat(3);

console.log(arbitaryType);

