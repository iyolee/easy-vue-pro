export function getCurrentAuthority() {
  return ["user"];
}

export function check(authority) {
  const currentAuthority = getCurrentAuthority();
  return currentAuthority.some(item => authority.includes(item));
}

export function isLogin() {
  const currentAuthority = getCurrentAuthority();
  return currentAuthority && currentAuthority[0] !== "guest";
}
