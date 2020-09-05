export default {
  DATA_END_POINT: "http://localhost:4000",
};

const query = `{
  products {
    id
    name
    size
    description
    image
    price
  }
}
`;

export const requestPayload = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query,
  }),
};
