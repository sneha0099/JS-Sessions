
class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        //10
console.log(Counter.getStaticCount()); // 2
console.log(c1.getStaticCount());  // error

/* 
It logs 10, 2, and then an error because the code defines two different counts: an instance property count = 10 that belongs to
each object (c1, c2), and a static property static count = 0 that belongs to the class Counter itself. When you create c1 and 
c2, the constructor runs twice and increments only the static Counter.count, making it 2, but it never changes the instance 
count, so c1.getCount() returns this.count from the object, which stays 10. Next, Counter.getStaticCount() is a static method
called on the class, so inside it this refers to the class Counter, and this.count means Counter.count, which is 2. Finally, c1.
getStaticCount() throws an error because getStaticCount is a static method and static methods are not available on instances c1
doesn’t have getStaticCount, so calling it results in not a function -> TypeError.
*/