import { API_BASE } from "../lib/constants";
import { handleResponse } from "../lib/handleResponse";

export async function getLuxuryCars(brand) {
  let url = brand
    ? `${API_BASE}/luxuryCar?brand=${brand}`
    : `${API_BASE}/luxuryCar`;
  const res = await fetch(url);
  return handleResponse(res);
}

export async function getLuxuryCarById(id) {
  const res = await fetch(`${API_BASE}/luxuryCar/${id}`);

  return handleResponse(res);
}

export async function createLuxuryCar(body) {
  const res = await fetch(`${API_BASE}/luxuryCar/createLuxuryCar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  handleResponse(res);
}
