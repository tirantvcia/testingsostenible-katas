export function upperCamelCase(args: string): string {

    let cadenas = args.split(/[_\- ]/);
    return cadenas.map(c => {
        return c.charAt(0).toUpperCase().concat(c.substring(1));
    }).join("");

}