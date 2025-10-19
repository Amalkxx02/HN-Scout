// Fetch a list of latest Hacker News stories (paginated)
export async function getArticlesList(pageNo: number,isInfinite:boolean) {
  // Hit the HN Algolia API with page and limit of 20
  const response = await fetch(
    `http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=${isInfinite ? 1000 : 20}&page=${pageNo}`,
    {
      // Cache for 1 hour so it’s not hitting API every time
      next: { revalidate: 3600 },
    }
  );
  
  if (!response.ok) {
    throw new Error("Network Error / Invalid Request");
  }

  return await response.json();
}

// Fetch comments and details for a single story by ID

export async function getArticlesComments(id: number) {
  const response = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);

  if (!response.ok) {
    throw new Error("Network Error / Invalid Request");
  }

  return await response.json();
}
