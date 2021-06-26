export default function stripHTML(dirtyHTML) {
    let cleanText = dirtyHTML.replace(/(<([^>]+)>)/gi, "");
    return cleanText;
}