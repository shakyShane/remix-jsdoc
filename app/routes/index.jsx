import { useLoaderData } from "@remix-run/react";

/**
 * @typedef {{name: string, age: number}} Person
 */

/**
 * @type {import("remix").LoaderFunction}
 * @returns {Promise<Person>}
 */
export async function loader(args) {
  console.log(args.request.url)
  return { name: "shane", age: 101 }
}

export default function Index() {
  /** @type {Person} */
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix, {data.name}</h1>
    </div>
  );
}
