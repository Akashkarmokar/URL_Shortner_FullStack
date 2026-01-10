"use client";

import Cookies from "js-cookie";
import { env } from "../_lib/config";

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

    const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
    const headers = {
        "Content-Type": "application/json",
        ...(opts.headers || {}),
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    return fetch(baseUrl + url, { ...opts, headers });
}
