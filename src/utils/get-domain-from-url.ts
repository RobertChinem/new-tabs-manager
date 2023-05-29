export function getDomainFromURL(url: string) {
    const parsedUrl = new URL(url)
    let domain = parsedUrl.hostname

    if (domain.startsWith("www.")) {
        domain = domain.slice(4)
    }

    return domain
}
