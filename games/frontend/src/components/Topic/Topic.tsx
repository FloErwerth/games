import "./style.scss";

interface Props {
   name: string,
   pictureURL: string;
   difficulty: string;
   date: string;
   link: string;
}

export const Topic = ({link, name, pictureURL, difficulty, date}: Props) => {
   return <>
      <div className={"topic"}>
         <a href={link} target={"_blank"} className={"topic-link"}>Link zur Sendung</a>
         <div className={"topic-overlay"} />
         <div className={"topic-difficulty"}>Schwierigkeit: {difficulty}</div>
         <div className={"topic-name"}>{name}</div>
         <div className={"topic-date"}>Sendung vom: {date}</div>
         <img className={"topic-picture"} src={pictureURL} alt={name}/>
      </div>
      </>
}