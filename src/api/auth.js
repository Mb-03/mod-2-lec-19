const API_BASE = "https://lskk54wc-4000.euw.devtunnels.ms/api";

async function handleResponse(res) {
  if (res.status === 401) throw new Error("Unathorised");
  if (!res.ok) {
    const text = await res.text().catch(() => "Unkown Error");
    throw new Error(text);
  }

  return res.json();
}

export async function fetchCurrentUser() {
  const res = await fetch(`${API_BASE}/auth/me`, {
    credentials: "include",
  });
  return handleResponse(res);
}

export async function loginUser(credentials) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return handleResponse(res);
}

export async function registerUser(data) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function logoutUser() {
  const res = await fetch(`${API_BASE}/auth/logout`, {
    method: "POST",

    credentials: "include",
  });

  return handleResponse(res);
}
