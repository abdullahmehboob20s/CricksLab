import React from "react";
import "./style.css";
import RecentBall from "./RecentBall";
import { Link } from "react-router-dom";

function ScoreCardFooter(props) {
  const { footerText, showFooterBtns } = props;
  return (
    <div className="score_card_footer">
      <div className="score_card_footer_left">
        <div className="score_card_footer_left_runs">
          <p className="run_rate">
            Runs Rate: <span className="run_rate_num">5.71</span>
          </p>
          <p className="run_rate">
            Extra Runs: <span className="run_rate_num">20</span>
          </p>
        </div>
        <div className="recents_balls">
          <p className="recent_text">Recent :</p>
          <div className="recents">
            <RecentBall value="dot" />
            <RecentBall value="1" />
            <RecentBall value="1" />
            <RecentBall value="6" />
            <RecentBall value="1" />
            <RecentBall value="WD +1" />
            <RecentBall value="W" />
          </div>
        </div>
      </div>
      <div className="score_card_footer_right">
        {showFooterBtns ? (
          <>
            <Link className="score_card_view_details">View Detail</Link>
            <Link className="score_card_watch_live">Watch Live</Link>
          </>
        ) : (
          <p className="footer_right_text">{footerText}</p>
        )}
      </div>
    </div>
  );
}

export default ScoreCardFooter;
