// // app/blog/actions.js
// "use server";

// import { getDb } from "@/app/lib/db";
// import { revalidatePath } from "next/cache";

// export async function createPost(formData) {
//   const title = formData.get("title");
//   const created_at = formData.get("created_at");
//   const front_image = formData.get("front_image");
//   const id = formData.get("id");

//   const db = await getDb();

//   await db.run("INSERT INTO posts (title, created_at, front_image, id) VALUES (?, ?, ?, ?)", title, created_at, front_image, id);

//   // Refresh the /blog page so new post shows up immediately
//   revalidatePath("/blog");
// }


