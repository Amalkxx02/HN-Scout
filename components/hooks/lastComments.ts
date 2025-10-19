import { getArticlesComments } from "@/apis/articleApi";
export default async function lastComments(id: number) {
  //fetch the article and its comments
  let article
    try {
      article = await getArticlesComments(id);
    } catch (error) {
      throw new Error("Network error / Invalid page");
    }
  //slice the comment object to only show latest 5
  const latestFiveComment = article?.children?.slice(0,5) || [];
  return {...article,children:latestFiveComment};
}
