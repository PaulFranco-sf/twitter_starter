import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  console.log()
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox setTweets={props.setTweets} tweets={props.tweets} userProfile={props.userProfile}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
    props.tweets.map((tweet, i) => {
      return <Tweet key={i} tweet={tweet} />
    })
  }</div>
    </div>
  )
}
