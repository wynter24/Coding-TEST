function solution(id_list, report, k) {
  let uniqueReport = new Set(report);

  let reportCount = {};
  id_list.forEach(id => reportCount[id] = 0);

  let userReports = {};
  id_list.forEach(id => userReports[id] = []);

  for (const report of uniqueReport) {
    let [reporter, reported] = report.split(' ');
    reportCount[reported] += 1;
    userReports[reporter].push(reported);
  }

  let bannedUsers = [];
  for (const user in reportCount) {
    if(reportCount[user] >= k) bannedUsers.push(user);
  }

  let answer = id_list.map(id => {
    return userReports[id].filter(reported => bannedUsers.includes(reported)).length;
  })

  return answer;
}