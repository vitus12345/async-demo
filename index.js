console.log('Before')
const user = getUser(1)
console.log(user)
console.log('After')


function getUser(id) {
    setTimeout(()=>{
        console.log('Reading a user from the database')
        return {id: id, githubUserName:'vitus'}
    }, 2000)
}


function myDisplayer(something) {
    console.log(something)
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer)


  function person(something) {
    console.log(something)
  }

  function getSurname(name1, name2, myCallback) {
    let sur = name1 + ' ' + name2;
    myCallback(sur);
  }

    getSurname('vit', 'ume', person)



  