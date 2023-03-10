export const dealListData = (data: string) => {
  let index = 1;
  let dataCopy = data;
  while (dataCopy.match(/<article(?!\d)/)) {
    dataCopy = dataCopy
      .replace(/(<article)(?!\d)/, `$1${index}`)
      .replace(/(<\/article)>/, `$1${index}>`);
    index++;
  }
  const _list = dataCopy
    .match(/<article(\d+)(.|\n)*<\/article\1>/g)
    ?.map((item) => {
      if (!item.includes("CRD") || item.includes("CRD PRO")) return null;
      return {
        artist: item
          .match(/(?:artist(.|\n)*>)(.|\n)*(?:<\/a>)/)?.[0]
          .replace(/(<\/*b>)|(<\/a>)/g, "")
          .replace(/(artist(.|\n)+>)/, "")
          ?.trim(),
        rate:
          item
            .match(
              /(?:<span class="ig-list--rating text-left">).*(?:<\/span>)/
            )?.[0]
            .replace(/,/g, "")
            .match(/\d+/)?.[0] || 0,
        song: item
          .match(
            /(?:<a(\s|\n)(.|\n)*class="js-link-song"(.|\n)*>\s*).*(?:\s*<\/a>)/
          )?.[0]
          ?.replace(/(<a.*>)|(<\/a(.|\n)*>)|(<\/*b>)/g, "")
          ?.trim(),
        link: item
          .match(/(?:<a(\s|\n)(.|\n)*href=").*(?:")/)?.[0]
          ?.replace(/class(.|\n)*/, "")
          ?.replace(/(<a(.|\n)*href=")|"/g, ""),
      };
    })
    .filter(Boolean);
  // console.log(_list);

  return _list;
};
