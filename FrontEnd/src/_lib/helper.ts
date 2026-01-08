import Cookies from "js-cookie";

type RequestInit = {
    method?: string;
    headers?: HeadersInit;
    body?: BodyInit | null;
    mode?: RequestMode;
    credentials?: RequestCredentials;
    cache?: RequestCache;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    integrity?: string;
    keepalive?: boolean;
    signal?: AbortSignal | null;
    duplex?: "half" | "full";
};

export function apiFetch(url: string, opts: RequestInit = {}) {
    const token = Cookies.get("token");
    const baseUrl = "http://localhost:3000";
    const headers = {
        "Content-Type": "application/json",
        ...(opts.headers || {}),
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    return fetch(baseUrl + url, { ...opts, headers });
}
