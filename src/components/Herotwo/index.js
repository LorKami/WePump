import React from 'react'
import "./Herotwo.css";

import Gif1 from "../../images/Phase_2.gif";

const Herotwo = () => {
  return (
    <div>
        
    <div className='HeroSection'>

        <div className='HeroBoxes'>
          
            <div className='ImageLeft'>
                <img src={Gif1} />
            </div>

            <div className='HeroTextLeft'>

              <div className='HeroLeft'>
                  <h2>ABOUT</h2>
                <div className='HeroLeftAbout'>
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

              <div className='HeroRight'>
                <div className='HeroRightUP'>

                    <h2>Mint</h2>
                  <div className='HeroRightUPBox'>
                    <div className='HeroRightUPBoxMint'>
                      <p>A collection of 444 NFTs in which the total funds will be directly injected into the token. (111 NFTs will be airdropped to all $WPUMP pre-sale buyers).</p>
                    </div>
                  </div>

                  <h2>Collection</h2>
                <div className='HeroRightDownBox'>
                  <div className='HeroRightDownCollection'>
                    <p>Each minted WePumpNFT has a unique characteristic based on one of the four existing colors, which determines the percentage of $WPUMP airdrop you will receive :</p>
                    <p><span className='SOrange'>Orange: 35%</span> - This color has a slightly higher percentage due to its association with emotion and energy. It represents the excitement of being part of the project and the passion to continue in it.</p>
                    <p><span className='SGreen'>Green: 30%</span> - This color has a prominent percentage and is associated with nature and abundance. It represents the growth and prosperity expected when acquiring a WePumpNFT(...) and the anticipation of receiving rewards in $WPUMP.</p>
                    <p><span className='SYellow'>Yellow: 25%</span> - This color has a slightly lower but still significant percentage. It evokes joy and optimism and represents the excitement of receiving $WPUMP airdrops and participating in the pre-sale. It also symbolizes fast-paced success.</p>
                    <p><span className='SBlue'>Sky Blue: 10%</span> - This color has a moderate percentage but is still an important part of the color scheme. It evokes calmness and serenity, representing the stability and confidence expected when obtaining WePump NFTs and actively involving oneself in the project. It also symbolizes a powerful interest in the digital world and technology and its application in Web 3.</p>
                  </div>
                </div>

                </div>
              </div>

            </div>
        </div>

    </div>

    </div>
  )
}

export default Herotwo