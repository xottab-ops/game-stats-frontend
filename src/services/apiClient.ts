const API_BASE_URL = process.env.REACT_APP_API_HOST || "http://localhost";
const API_PORT = process.env.REACT_APP_API_PORT || "5000";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${API_BASE_URL}:${API_PORT}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    return res.json();
}