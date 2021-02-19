const convert = (from, to) => str => console.log(Buffer.from(str, from).toString(to));
const hexToUtf8 = convert('hex', 'utf8');

console.log('servicePrincipalId');
hexToUtf8('your servicePrincipalId goes here');
console.log('servicePrincipalKey');
hexToUtf8('your servicePrincipalKey goes here');
console.log('tenantId');
hexToUtf8('and tenantId here as well');
