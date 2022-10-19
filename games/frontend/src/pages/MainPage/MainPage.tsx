import "./styles.scss";
import {Carousel} from "../../components/Carousel/Carousel";
import {useAppDispatch, useAppSelector} from "../../store";
import {useEffect} from "react";
import {fetchTopicInfo} from "../../utils/fetchUtils";
import {setTopicInfo} from "../../store/reducers/topics/topics";
import {getTopics} from "../../store/selectors/topicSelectors";
import {Topic} from "../../components/Topic/Topic";

export const MainPage = () => {
   const topics = useAppSelector(getTopics);
   const dispatch = useAppDispatch();

   useEffect(() => {
      fetchTopicInfo().then((topics) => {
         dispatch(setTopicInfo(topics));
      });
   }, [])

   return (<>
         <div className={"main"}>
            <h1 className={"main-title"}>Pietsmiet Game Shows</h1>
            <h2>Wähle eines der unten aufgeführten Spiele, um einen Raum zu erstellen oder einem Raum beizutreten.</h2>
         </div>
         <div className={"main-carousel"}><Carousel width={750} height={375}>{topics.map(topic => {
            return (<Topic
               name={topic.name} pictureURL={topic.picture} difficulty={topic.difficulty} date={topic.date}
               link={topic.link}/>);
         })}</Carousel></div>
      </>
   );
}