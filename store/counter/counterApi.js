import { server } from "../../config";

// A mock function to mimic making an async request for data
export function getAmount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function getCount() {
  return fetch(`${server}/api/count`).then((res) => res.json());
}
