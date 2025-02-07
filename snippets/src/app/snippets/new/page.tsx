import { db } from "@/db";
import { redirect } from "next/navigation";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // this async function runs only on the Next.js built-in server, not on the page
    // this needs to be a server action, the line below is a next.js thing for how it determines server actions
    "use server";

    // check user's inputs and make sure they're valid
    const title = formData.get("title") as string; // the data for this "title" is gathered from the <input> in the return with name="title"
    const code = formData.get("code") as string; // same as above but instead with "code"

    // create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        //title: title, | this can just be written as title because the const title above and the title created here have the same name
        //code: code,
        title,
        code,
      },
    });
    console.log(snippet);

    // redirect to homepage (or to saved snippet page once we get to that)
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
