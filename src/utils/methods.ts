export function difference(a: string[], b: string[]): string[] {
    return a.filter(item => !b.includes(item));
}

export function union(a: string[], b: string[]): string[] {
    return [...new Set([...a, ...b])];
}

