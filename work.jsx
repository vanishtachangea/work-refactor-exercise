/**
 * ----------------------------------------
 * refactoring
 * ----------------------------------------
 */
​
/**
 * ----------------------------------------
 * refactor 'work' function
 * ----------------------------------------
 *
 * this test is all about object-oriented thinking
 *
 * Q code blocks with code smell(s)
 * A possible refactoring results
 *
 */
​
/**
 * ----------------------------------------
 * Q1 long and nested if-elses
 * ----------------------------------------
 */
const work = obj => {
  if (obj.type === 'user') {
    return userClient.get(`/users/${obj.id}`);
  } else if (obj.type === 'record') {
    return recordClient.post('/url/to/another/service/records', obj);
  } else if (obj.type === 'log') {
    if (obj.allowWrite) {
      localStorage.write(obj);
      remoteStorage.write(obj);
    } else {
      console.log(obj);
    }
  }
};