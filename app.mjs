export function romanToInt(s) {
    const romanDict = {"I":1,"V":5, "X":10, "L":50,"C":100, "D":500, "M":1000};
    let totalNum = 0;
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      const value = romanDict[letter];
      if (i < s.length - 1 && value < romanDict[s[i+1]]) {
        totalNum = totalNum - value;
      } else {
        totalNum = totalNum + value;
      }
    }
    return totalNum;
  }

