
import { cookies } from "next/headers";

const baseUrl = process.env.AUTH_URL

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${baseUrl}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      return { data: session, error: null };
    } catch (err) {
      console.log(err)
      return { data: null, error: { message: "Something went wrong" } };
    }
  },
};