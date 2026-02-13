interface User {
  id: number;
  name: string;
  email: string;
}

async function main() {
  const users = await fetchData<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(users);
}

main();


async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    return await res.json() as T;

  } catch (error) {
    console.error("Fetch failed:", error);
    throw error; // Always rethrow
  }
}
