/**
 * @method nl2br
 * @param content
 * @description
 * * \n 을 <br> 로 바꾼다.ㄴ
 */

const nl2br = (content: string) => content.replace(/\n/g, "<br/>");

export default nl2br;
