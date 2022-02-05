import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "remix";

interface Person {
  name: string;
  age: number;
}

export const loader: LoaderFunction = async (args): Promise<Person> => {
  console.log(args.request.url)
  return { name: "shane", age: 101 }
}

export default function Index() {
  const data = useLoaderData<Person>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix, {data.name}</h1>
    </div>
  );
}
