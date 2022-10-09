import { ContentBlock } from "draft-js";

function findregex(regex: RegExp, contentBlock: ContentBlock, callback: ((arg0: any, arg1: any) => void)) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }


  export default findregex