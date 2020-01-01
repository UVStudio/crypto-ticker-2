import React from "react";

export default class Illustrations extends React.Component {
  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Latest Crypto News
            </h6>
          </div>
          <div className="card-body">
            <h5 className="font-weight-bold">
              Bitcoin's 'Halving' Is About to Shake Cryptocurrency Markets
            </h5>
            <div className="text-center">
              <a
                href="https://learningenglish.voanews.com/a/bitcoin-s-halving-is-about-to-shake-cryptocurrency-markets/5214239.html"
                target="_blank"
              >
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "27rem" }}
                  src="../../img/news-pic.jpg"
                  alt=""
                />
              </a>
            </div>
            <iframe
              src="https://learningenglish.voanews.com/embed/player/0/5214238.html?type=audio"
              frameborder="0"
              scrolling="no"
              width="100%"
              height="144"
              allowfullscreen
            ></iframe>
            <p>
              If you are not someone following the ups and downs of bitcoin, you
              probably have not heard about a big event next year. It is called
              the “halving.” It will cut creation of the cryptocurrency by 50
              percent...
            </p>
            <a
              href="https://learningenglish.voanews.com/a/bitcoin-s-halving-is-about-to-shake-cryptocurrency-markets/5214239.html"
              target="_blank"
            >
              Read full article &rarr;
            </a>
          </div>
        </div>
      </div>
    );
  }
}
