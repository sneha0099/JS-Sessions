// Problem 5: Normalize Inconsistent API Responses
// Objective
// Convert inconsistent API data into a normalized structure.
// Input
// const apiResponse = [
//   { id: 1, name: "A", tags: "x,y,z" },
//   { id: 2, name: "B", tags: ["x", "y"] },
//   { id: 3, name: "C" }
// ];

// Requirements
// Normalize tags into arrays


// Create a lookup object keyed by id


// Fill missing properties with defaults


// Do not mutate the original response


// Expected Outcome
// {
//   1: { id: 1, name: "A", tags: ["x","y","z"] },
//   2: { id: 2, name: "B", tags: ["x","y"] },
//   3: { id: 3, name: "C", tags: [] }
// }

const apiResponse = [
  { id: 1, name: "A", tags: "x,y,z" },
  { id: 2, name: "B", tags: ["x", "y"] },
  { id: 3, name: "C" }
];

const cloned = structuredClone(apiResponse)

console.log(cloned);

function normalize(apiResponse){
    return apiResponse.reduce((apiResp, curr)=>{
        const{id,name,tags} = curr
        const tagsarr = Array.isArray(tags)? tags: typeof tags === "string" ? tags.split(",").map(t=>t.trim()):[];
       

        apiResp[id] = {
            "id": id,
            "name": name,
            "tags": tagsarr
        }

        return apiResp
    },{})
}

const normalized = normalize(apiResponse)

console.log("normalized", normalized);
