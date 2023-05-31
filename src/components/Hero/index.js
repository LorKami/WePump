import React from "react";
// import "./hero.css";

import Gif1 from "../../images/Phase_2.gif";

const Hero = () => {
  return (
    <div>
      <div className="HeroSection">
      <div className="Hero">
        <div className="HeroImage">
          <img src={Gif1} />
        </div>
        <div className="HeroAllText">
          <div className="HeroZoneText">
            <div className="TitleLeft">
              <h2>ROADMAP</h2>
              <div className="HeroTextLeft ScrollerLeft">
                <p>
                  <span>Lorem</span> ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor <span>incididunt</span>{" "}
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="TitleRight">
              <h2>FAQ</h2>
              <div className="HeroTextRight ScrollerRight">
                <h3>Lorem ipsum dolor?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod <span>tempor </span>
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud <span>exercitation</span> ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
            </div>
          </div>

          <div className="TitleBottom">
            <h2>ABOUT</h2>
            <div className="HeroTextBottom ScrollerBottom">
              <p>
              WePump is not just another token on the Solana blockchain; 
                    it's a dynamic experience fueled by NFT interaction. 
                    Mint your WePumpNFT and unlock a world of opportunities, 
                    receiving $WPUMP rewards and securing airdrops through our 
                    exclusive pre sale. Each WePumpNFT represents a unique 
                    characteristic based on four captivating colors, 
                    determining the percentage of $WPUMP airdrop you'll receive. 
                    With Orange, Green, Yellow, and Sky Blue, you'll embark on a 
                    path to unrivaled success. Join our $WPUMP pre sale, raising 
                    50 SOL to inject into the liquidity pool, and enjoy the 
                    perks of owning WePump NFTs. The WePump Mint collection of 
                    444 NFTs ensures liquidity growth, with 111 NFTs airdropped 
                    to pre sale buyers. Embrace the transformative power of 
                    WePump and redefine success in decentralized finance and NFTs.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
