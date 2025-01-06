import OpenAI from "openai";

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
});

interface SummarizeNewsResponse {
    content: string;
}

/**
 * Summarizes news content and adds the source.
 *
 * @param text - The news text to be summarized.
 * @param source - The source of the news.
 * @returns A promise that resolves to a string containing the summarized news with the source.
 */
export const summarizeNews = async (text: string, source: string): Promise<string> => {
    const prompt = `Summarize this news with a maximum of 200 characters = ${text} and add the source of the following =  ${source}`;

    try {
        const aiResponse = await openAi.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a news summarizer" },
                { role: "user", content: prompt },
            ],
            temperature: 0.5,
            max_tokens: 200,
        });
        console.log("ai Response", aiResponse);
        return (aiResponse.choices[0].message.content || "") as SummarizeNewsResponse["content"];
    } catch (error) {
        console.log('AI err response', error);
        const errMsg = "AI err response";
        throw new Error(errMsg, { cause: error });
    }
};
