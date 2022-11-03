import React from "react";
import { useSelector } from "react-redux";
import styles from './userCard.module.scss'



const Background = ({ handleClick, comments, index, userIndex }) => {

  const postsArr = useSelector(store => store.counter.counter)
  const posts = postsArr[userIndex].posts
  let counter = posts[index].likes


  return (
    <>
      <div className={styles.background} onClick={handleClick}>

        <h2><span className={styles.likes_span}> <svg className={styles.svg} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M513.706667 955.733333c-5.0688 0-9.898667-2.269867-13.141334-6.161066L136.192 510.088533a16.554667 16.554667 0 0 1-1.860267-2.747733C90.299733 457.8816 68.266667 399.377067 68.266667 332.8c0-72.055467 26.368-134.9632 78.370133-186.999467C198.0928 94.344533 260.727467 68.266667 332.8 68.266667c69.6832 0 130.2016 23.278933 180.053333 69.2224C562.653867 91.5456 622.574933 68.266667 691.2 68.266667c73.250133 0 136.174933 26.112 187.067733 77.602133C929.672533 197.888 955.733333 260.778667 955.733333 332.8c0 67.157333-22.1184 126.088533-65.757866 175.172267L526.882133 949.504c-3.2256 3.925333-8.055467 6.212267-13.141333 6.229333H513.706667zM164.130133 490.308267l349.525334 421.563733 350.395733-426.069333C902.912 442.043733 921.6 392.174933 921.6 332.8c0-63.607467-22.1184-116.906667-67.601067-162.935467C809.130667 124.4672 755.882667 102.4 691.2 102.4c-63.658667 0-116.599467 21.742933-161.809067 66.491733a17.066667 17.066667 0 0 1-29.696 2.986667 17.9712 17.9712 0 0 1-2.321066-1.9456C451.925333 124.484267 398.097067 102.4 332.8 102.4c-63.573333 0-116.5824 22.084267-162.013867 67.5328C124.7744 215.978667 102.4 269.243733 102.4 332.8c0 59.323733 18.944 109.175467 57.9072 152.4224 0.5632 0.546133 2.338133 2.304 3.822933 5.085867z" /></svg>
          :</span>{counter}</h2>

        <h2><span><svg className={styles.comments} viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M841.134446 1024a36.790489 36.790489 0 0 1-17.590681-4.46167L490.052242 837.487579h-110.627465C173.74912 837.487579 0 656.095108 0 441.45954V373.035081A376.681947 376.681947 0 0 1 379.424777 0.01024h411.424457A376.681947 376.681947 0 0 1 1170.274012 373.035081v68.278174a369.367735 369.367735 0 0 1-292.568503 363.955218V987.428937a36.571063 36.571063 0 0 1-36.571063 36.571063zM379.424777 72.823226A303.539822 303.539822 0 0 0 73.142126 373.035081v68.278174c0 172.139993 143.13914 323.141911 306.282651 323.141912h119.989657a36.900202 36.900202 0 0 1 17.590682 4.46167L804.563383 926.099265v-150.233927a36.571063 36.571063 0 0 1 30.28084-35.839641C994.184344 712.26826 1097.131886 595.058004 1097.131886 441.45954V373.035081a303.539822 303.539822 0 0 0-306.282652-300.358139h-411.424457z" /></svg>:</span>{comments.length}</h2>



      </div>

    </>
  )
}

export default Background