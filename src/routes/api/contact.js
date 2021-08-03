import { validateEmail, hasCharacters } from "../../lib/validate";

export async function post({ body }) {
  const { name, email } = body;

  if (
    !name ||
    !email ||
    !hasCharacters(name) ||
    !hasCharacters(email) ||
    !validateEmail(email)
  ) {
    return {
      status: 400,
      body: {
        message: "Invalid inputs",
      },
    };
  }

  return {
    status: 200,
    body: {
      message: "You will soon be contacted by us through email.",
    },
  };
}
