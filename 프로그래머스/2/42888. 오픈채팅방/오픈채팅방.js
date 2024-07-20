function solution(records) {
  let answer = [];
  let chattings = [];
  let nicknames = {};

  for (const record of records) {
    let [action, userId, nickname] = record.split(' ');
    if(action !== "Change") chattings.push([action, userId]);

    if(action === "Enter") nicknames[userId] = nickname;
    else if(action === "Change") nicknames[userId] = nickname;
  }
  
  for (const chat of chattings) {
    let [action, userId] = chat;
    if(action === "Enter") {
      answer.push(`${nicknames[userId]}님이 들어왔습니다.`);
    } else if(action === "Leave") {
      answer.push(`${nicknames[userId]}님이 나갔습니다.`);
    }
  }

  return answer;
}