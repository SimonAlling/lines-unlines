export function lines(s: string): ReadonlyArray<string> {
    return s === "" ? [] : s.replace(/\n$/, "").split("\n");
}

export function unlines(ls: ReadonlyArray<string>): string {
    return ls.map(line => line + "\n").join("");
}
