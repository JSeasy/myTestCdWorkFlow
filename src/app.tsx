export async function getInitialState() {
  return {
    product: {
      read: Math.floor(Math.random() + 0.5),
    },
    match: {
      read: Math.floor(Math.random() + 0.5),
    },
    stration: {
      read: Math.floor(Math.random() + 0.5),
    },
  };
}
