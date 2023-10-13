export const BASE_URL = "http://45.120.178.247:8081";

const makeRequest = (url, method, body, token) => {
    const options = {
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    return fetch(`${BASE_URL}${url}`, options).then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Ошибка код ${response.status}`);
    });
};

export const register = (userName, password, email) => {
    return makeRequest(
        `/auth/register`,
        "POST",
        { userName, password, email },
        ""
    );
};

export const authorize = (password, email) => {
    return makeRequest("/auth/login", "POST", { password, email }, "");
};
