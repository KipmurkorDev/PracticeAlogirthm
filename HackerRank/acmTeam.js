// There are a number of people who will be attending ACM-ICPC World Finals. Each of them may be well versed in a number of topics. Given a list of topics known by each attendee, presented as binary strings, determine the maximum number of topics a 2-person team can know. Each subject has a column in the binary string, and a '1' means the subject is known while '0' means it is not. Also determine the number of teams that know the maximum number of topics. Return an integer array with two elements. The first is the maximum number of topics known, and the second is the number of teams that know that number of topics.

function acmTeam(topic) {
  let longestTopic = 0;
  let res = 0;
  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      let valueLen = getValues(topic[i], topic[j]);
      if (valueLen > longestTopic) {
        longestTopic = valueLen;
        res = 1;
      } else if (valueLen === longestTopic) {
        res++;
      }
    }
  }
  return [longestTopic, res];
}

function getValues(value1, value2) {
  let arr = [];

  for (let k = 0; k < value1.length; k++) {
    if (parseInt(value1[k]) > parseInt(value2[k])) {
      arr.push(value1[k]);
    } else {
      arr.push(value2[k]);
    }
  }

  return arr.filter((item) => item === "1").length;
}
