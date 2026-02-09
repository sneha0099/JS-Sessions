const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 } // repeated action for same user
];

const cloned = structuredClone(activities)
console.log(cloned);


const activitiesProcessor = () => {
    return cloned.reduce((report,activity)=>{
    const {
        userId,
        type,
        duration = 0 // safe default
      } = activity;

     if (!report[userId]) {
        report[userId] = {
          totalTime: 0
        };
      }

     report[userId].totalTime += duration;

      report[userId][type] = (report[userId][type] || 0) + 1;

      return report;
},{})}

const res = activitiesProcessor()
console.log("res",res);
