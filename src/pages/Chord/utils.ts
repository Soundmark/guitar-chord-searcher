export const dealChordData = (data: string) => {
  return data
    .match(/(?:data-content=")(.|\n|\r)*(?:\[\/tab\])/)?.[0]
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .match(/(?:"content":)(.|\n|\r)*(?:\[\/tab\])/)?.[0]
    .replace(/("content":")|(\[\/*tab\])/g, "");
};
