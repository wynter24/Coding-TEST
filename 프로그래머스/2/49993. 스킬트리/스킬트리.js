function solution(skill, skill_trees) {
  let count = 0;

  for (const skillTree of skill_trees) {
    let filted = skillTree.split('').filter(el => skill.includes(el)).join('');

    if (skill.startsWith(filted)) count++
  }

  return count;
}