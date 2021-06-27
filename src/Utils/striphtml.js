export default function stripHTML(dirtyHTML) {
    let cleanText = dirtyHTML.replace(/(<([^>]+)>)/gi, "");
    if (cleanText.length > 100) {
        cleanText = cleanText.slice(0, 100) + "..."
    }
    return cleanText;
}