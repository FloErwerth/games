import "./style.scss";
import {CSSProperties, useCallback, useEffect, useMemo, useState} from "react";
import {Topic} from "../Topic/Topic";
import {css, cx} from "@emotion/css";

interface Props {
   width: number;
   height: number;
   children: JSX.Element[];
}

export const Carousel = ({children, width, height}: Props) => {

   const [position, setPostition] = useState(0);


   const positionStyle = useMemo(() => {
      return css({
            left: `${position}px`,
            width: `${width * children.length}px`,
         }
      );
   }, [position, width, children]);

   const handlePosition = useCallback((forward: boolean) => {
      const nextPosition = position + (forward ? -width : width);
      if (nextPosition < -width * (children.length - 1)) {
         setPostition(0);
         return;
      } else if (nextPosition > 0) {
         setPostition(-width * (children.length - 1));
         return;
      } else {
         setPostition(nextPosition);
      }
   }, [position, width, children])


   return (
      <>
         <button onClick={() => {
            handlePosition(false);
         }}>prev
         </button>
         <button onClick={() => {
            handlePosition(true);
         }}>next
         </button>
         <div style={{width: `${width}px`, height: `${height}px`, overflow: "hidden"}} className={"carousel"}>
            <div className={cx("carousel-inner", positionStyle)}>{children}</div>
         </div>
      </>
   );
}