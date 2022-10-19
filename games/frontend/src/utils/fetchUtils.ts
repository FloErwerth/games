export const fetchTopicInfo = async () => {
   const topics = await fetch("http://localhost:3001/topics/info").then((res) => {
      return res.text().then(text => { return JSON.parse(text) });
   });
   return topics;
}