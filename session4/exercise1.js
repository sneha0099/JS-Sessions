//1. Predict the output and explain the memory state.
const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); //2
console.log(registry.active[0].name); //gamma
console.log(registry.version);       // undefined

/*
The outputs are 2, "Gamma", and undefined because { ...data } creates only a shallow copy of the registry object. This means the 
new object copy gets a new top-level wrapper, but its nested properties like active still point to the same array as registry.
active. So when copy.active.push(...) runs, it pushes into the shared active array, making registry.active.length become 2, and
when copy.active[0].name = "Gamma" runs, it changes the name inside the same first object that registry.active[0] references, so
it becomes "Gamma". However, copy.version = 2.0 adds version only to the new top-level object copy, not to the original 
registry, so registry.version was never set and prints undefined.
*/


