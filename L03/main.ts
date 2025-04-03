function foobar<T>(url: string): T {
    return fetch(url) as T;
}