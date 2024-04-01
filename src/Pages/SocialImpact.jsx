import React from 'react';
import '../App.css';
import SocialImpactInvest from '../assets/Social-Impact.png';


function SocialImpact() {
  return (
    <div className="content-below-navbar">
      <h1 className="page-title">"Invest, Impact, Transform"</h1>
      <img 
        src={SocialImpactInvest} // URL de la imagen o imagen de assets
        alt="Social Impact" 
        className="page-image"
      />
      <div className="section">
        <h2 className="subtitle">What is it?</h2>
        <p className="paragraph">
        Social impact investing is a powerful gateway to a future where every euro you invest not only has the potential to yield a financial return but also creates tangible benefits for society. Imagine your money helping to build schools, revitalize forgotten neighborhoods, or empower small businesses with big dreams. It's not magic, but a reality where each investment is meant to better our world while looking after your financial interests. It's like planting seeds in a community garden; as they grow and flourish, the entire community enjoys the fruits.
        </p>
      </div>
      <div className="section">
        <h2 className="subtitle">Why Should It Interest You?</h2>
        <p className="paragraph">
        Investing with social impact turns you into an agent of change, regardless of your age or background. It's an opportunity for your money to reflect your values, supporting causes that matter to you with the possibility of recovering your investment and reusing it in future charitable projects. This is not a simple donation; it's an investment that allows your contribution to continue bearing fruit. It's an accessible strategy for those looking to transcend traditional philanthropy and want to see how their capital remains active and beneficial in the long term. Taking the step to start in social impact investing is to build a lasting legacy of positivity and progress, forging a better tomorrow that we can create together today.
        </p>
      </div>
    </div>
  );
}

export default SocialImpact;
