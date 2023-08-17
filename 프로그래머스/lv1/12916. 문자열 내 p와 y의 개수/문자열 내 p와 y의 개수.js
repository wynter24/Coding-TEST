function solution(s){
      var p_count = 0;
      var y_count = 0;
      s = s.toUpperCase();
      var num = 0;
      for (var i=0; i<s.length; i++) {
          if(s[i] === 'P') p_count++;
          if(s[i] === 'Y') y_count++;
      }
    return p_count === y_count ? true : false ;
}