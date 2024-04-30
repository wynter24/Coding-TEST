function solution(a, b) {
    let month_list = {
        1 : 31, 2 : 29, 3 : 31, 4 : 30, 5 : 31, 6 : 30, 7 : 31, 8 : 31, 9 : 30, 10 : 31, 11 : 30, 12: 31
    }
    let week_day_list = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    let totalDay = 0;
    let weekDay = "";
    
    for(let i=1; i<a; i++) {
      totalDay += month_list[i]; 
    }
    
    totalDay += b - 1 // - 1 하는 이유: 1일부터 카운트했기 때문
    weekDay = week_day_list[totalDay%7];
    
    return weekDay;
}