const API_BASE_URL = process.env.REACT_APP_API_HOST || "http://localhost:5000";
const REACT_APP_API_HOST = process.env.REACT_APP_API_HOST || "3000";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const res = await fetch(`${API_BASE_URL}:${REACT_APP_API_HOST}${endpoint}`, {
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