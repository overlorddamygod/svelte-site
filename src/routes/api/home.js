export async function get(req) {
  return {
    status: 200,
    body: [
      {
        icon: "business.svg",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        icon: "badge.svg",
        body: "Sed tempore incidunt voluptate, maxime non distinctio saepe provident qui doloribus.",
      },
      {
        icon: "target.svg",
        body: "Dolores optio nesciunt maiores aperiam.",
      },
    ],
  };
}
