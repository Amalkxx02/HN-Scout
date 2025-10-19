1. UI/UX choices
My goal was to create a clean, highly functional interface that minimizes distractions.

    Choice: I chose a minimalist, white theme.

    Why: This design  speeds up reading/focuses attention purely on the content/gives a professional, modern feel. The main story list is front and center, prioritizing content accessibility and quick scanning.

2. Algorithm choices
The core of this project is the ScoutScore—a custom formula that ranks stories based on a weighted combination of factors, not just raw votes.
ScoutScore=(Weight×HN_Score)+(Weight​×log(Comments))−(Weight​×AgeInHours)

    Why this formula? It ensures that stories are evaluated for Popularity (HN_Score), Engagement (Comments), and Recency (AgeInHours). The log function on comments prevents a few controversial threads from skewing the results, and the age penalty keeps the feed fresh.

3. Packages used
    lucide-react - for ui icons


4. Extras and Polish (Beyond the Assignment)

5. AI Tools Used
I used Gemini as a powerful assistant throughout the project.

    How it helped: I primarily used it for quick syntax retrieval and targeted debugging assistance, especially when dealing with complex asynchronous operations. This approach allowed me to speed up the initial setup and free up more time to focus on refining the custom ScoutScore algorithm and unique UI elements.Also for documentation and final optimization
