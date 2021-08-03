export async function post({ body }) {
  console.log(body);
  return {
    status: 200,
    body: {
      message: "You will soon be contacted by us through email.",
    },
  };
}
