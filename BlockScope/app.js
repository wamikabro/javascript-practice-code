function formatStr(str) {
  {
    let prefix, rest;
    prefix = str.slice(0, 3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }

  if (/^FOO:/.test(str)) {
    return str;
  }

  return str.slice(4);
}

console.log(formatStr("Wamique"));
console.log(formatStr("FOO:Wamique"));
