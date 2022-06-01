export default function life(pers) {
  let result;
  if (pers.health > 50) {
    result = 'healthy';
  }
  if (pers.health <= 50 && pers.health >= 15) {
    result = 'wounded';
  }
  if (pers.health < 15) {
    result = 'critical';
  }
  return result;
}
