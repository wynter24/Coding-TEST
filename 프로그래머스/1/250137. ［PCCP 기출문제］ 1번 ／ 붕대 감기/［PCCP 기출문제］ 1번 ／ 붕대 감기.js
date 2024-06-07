function solution(bandage, health, attacks) {
  let [cooldownTime, heal, extraHeal] = bandage;
  let totalAttack = attacks[attacks.length-1][0];
  let maxHealth = health;
  let healCnt = 0;
  let attackIdx = 0;

  for (let i = 1; i <= totalAttack; i++) {
    let [attackTime, damage] = attacks[attackIdx]
    if(i === attackTime) {
      health -= damage;
      if(health <= 0) return -1;
      healCnt = 0;
      attackIdx++;
    } else {
      if(healCnt < cooldownTime) {
        health += heal;
        healCnt++;
        if(healCnt === cooldownTime) {
          health += extraHeal;
          healCnt = 0;
        }
      }
      if(health > maxHealth) health = maxHealth;
    }
  }
  
  return health;
}