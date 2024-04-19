export function formatPhoneNumber(num) {
  const numStr = String(num);
  const first = numStr.substring(0, 3);
  const middle = numStr.substring(3, 5);
  const last = numStr.substring(5, 7);
  const res = `${first}-${middle}-${last}`;
  return res;
}
