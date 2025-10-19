import { getArticlesList } from "@/apis/articleApi";

export default async function sortedArticleList(pageNo: number) {
  //fetch article list
  let articleList;
  try {
    articleList = await getArticlesList(pageNo);
  } catch (error) {
    throw new Error("Network Error");
  }
  // custom function to calculate score and show as human understandable
  function getScoreOutOf100(points:number, numberOfComments:number, timeDecay:number) {

    const rawScore = Math.max(
      0,
      points * 0.6 + numberOfComments * 0.3 - timeDecay * 0.001
    );

    const maxScore = 250;

    const score = Math.min(100, (rawScore / maxScore) * 100);

    return Math.round(score);
  }

  const scoredArticlesList =

    articleList?.hits?.map((article:any) => {

      const points = article?.points;
      const numberOfComments = article?.num_comments;
      const createdAt = new Date(article?.created_at);

      //find the post age
      const timeDecay = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60);

      const score = getScoreOutOf100(points, numberOfComments, timeDecay);

      return { ...article, score };
    }) || [];
  //sort the page based on the score
  scoredArticlesList.sort((a:any, b:any) => b.score - a.score);
  return { ...articleList, hits: scoredArticlesList };
}
