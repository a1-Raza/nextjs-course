import { db } from "@/db";

export default async function Home() {
  // async allows us to fetch data

  const snippets = await db.snippet.findMany(); // to get all snippets out of database

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
