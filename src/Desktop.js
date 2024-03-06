import React from 'react';

const Desktop = () => {
  const handleFrameClick = () => {
    window.location.href = "./login.html";
  };

  const handleFrame1Click = () => {
    window.location.href = "./desktop.html";
  };

  const handleRectangleButtonClick = () => {
    window.location.href = "./desktop.html";
  };

  return (
    <div className="desktop-1" style={{ width: '100%', position: 'relative', backgroundColor: 'var(--color-white)', height: '3301px', overflow: 'hidden', textAlign: 'left', fontSize: 'var(--font-size-16xl)', color: 'var(--color-gray-100)', fontFamily: 'var(--font-jockey-one)' }}>
      <div className="frame" style={{ position: 'absolute', top: '45px', left: '25px', width: '239px', height: '62px', overflow: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', gap: '0 17px' }}>
        <img className="frame-child" alt="" src="./public/ellipse-4@2x.png" style={{ width: '62px', position: 'relative', borderRadius: '50%', height: '62px', objectFit: 'cover' }} />
        <div className="mapconnect" style={{ position: 'undefined', display: 'inline-block', width: '56px', marginTop: '7px' }}>MapConnect</div>
      </div>
      <button className="frame1" onClick={handleFrameClick} style={{ cursor: 'pointer', border: '0', padding: '0 32px', backgroundColor: '#646161', position: 'absolute', top: '42px', left: '1020px', borderRadius: 'var(--br-mini)', width: '142px', height: '41px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', boxSizing: 'border-box' }}>
        <div className="log-in" style={{ position: 'relative', fontSize: 'var(--font-size-6xl)', fontFamily: 'var(--font-jockey-one)', color: 'var(--color-white)', textAlign: 'left' }}>LOG IN</div>
      </button>
      <button className="frame2" onClick={handleFrame1Click} style={{ cursor: 'pointer', border: '0', padding: '0 31px', backgroundColor: '#e4d6d6', position: 'absolute', top: '42px', left: '1124px', borderRadius: 'var(--br-mini)', width: '138px', height: '41px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', boxSizing: 'border-box' }}>
        <div className="sign-up1" style={{ position: 'relative', fontSize: 'var(--font-size-6xl)', fontFamily: 'var(--font-jockey-one)', color: 'var(--color-black)', textAlign: 'left' }}>SIGN UP</div>
      </button>
      <div className="mapconnect-maps-the-container" style={{ position: 'absolute', top: '169px', left: '361px', fontFamily: 'var(--font-jomhuria)', fontSize: '140px' }}>
        <p className="mapconnect-maps">MAPCONNECT MAPS</p>
        <p className="the-ultimate-solution-to-conne" style={{ margin: '0', fontSize: '50px', color: '#85818d' }}>
          <span>
            <span>THE ULTIMATE SOLUTION TO CONNECT YOU TO THE WORLD</span>
            <span className="span"> </span>
          </span>
        </p>
      </div>
      <div className="desktop-1-child" style={{ position: 'absolute', borderRadius: 'var(--br-21xl)', top: '438px', left: '45px', backgroundColor: 'var(--color-gray-100)', border: '10px solid var(--color-snow)', boxSizing: 'border-box', width: '1170px', height: '505px' }}></div>
      <img className="desktop-1-item" alt="" src="./public/rectangle-4@2x.png" style={{ position: 'absolute', borderRadius: 'var(--br-21xl)', top: '457px', left: '748px', width: '453px', height: '460px', objectFit: 'cover' }} />
      <div className="embark-on-a" style={{ position: 'absolute', top: '631px', left: '85px', color: 'var(--color-white)', display: 'inline-block', width: '647px', height: '411px' }}>
        Embark on a seamless journey with our innovative platform designed to help you through your in yourE-commerce business experience.Get access to our features for free today
      </div>
      <button className="desktop-1-inner" onClick={handleRectangleButtonClick} style={{ cursor: 'pointer', border: '0', padding: '0', backgroundColor: '#6e95db', position: 'absolute', top: '499px', left: '244px', borderRadius: 'var(--br-xl)', width: '260px', height: '74px' }}></button>
      <div className="get-started" style={{ position: 'absolute', top: '512px', left: '303px', color: 'var(--color-white)' }}>GET STARTED</div>
      <div className="frame3" style={{ position: 'absolute', top: '1071px', left: '-1px', width: '1281px', height: '2230px', color: '#cec8c8' }}>
        <div className="frame4" style={{ position: 'absolute', top: '0', left: '0', width: '1475px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div className="frame5" style={{ width: '1474px', position: 'relative', height: '777px', overflow: 'hidden', flexShrink: '0' }}>
            <img className="frame-item" alt="" src="./public/rectangle-9.svg" style={{ position: 'absolute', top: '0', left: '0', width: '1474px', height: '777px' }} />
            <div className="use-our-polygon" style={{ position: 'absolute', top: '221px', left: '141px', display: 'inline-block', width: '562px' }}>use our polygon feature and search area that fits your requirement and find the details for some specific buyer or seller.</div>
            <div className="search-a-specific" style={{ position: 'absolute', top: '112px', left: '141px', fontSize: '60px', color: 'var(--color-white)' }}>SEARCH A SPECIFIC AREA</div>
            <img className="frame-inner" alt="" src="./public/rectangle-10@2x.png" style={{ position: 'absolute', top: '62px', left: '737px', borderRadius: 'var(--br-11xl)', width: '524px', height: '463px', objectFit: 'cover' }} />
            <div className="ellipse-div" style={{ position: 'absolute', top: '188px', left: '963px', borderRadius: '50%', backgroundColor: 'rgba(193, 189, 226, 0.4)', border: '1px solid #464ccf', boxSizing: 'border-box', width: '252px', height: '227px' }}></div>
          </div>
        </div>
        <div className="frame6" style={{ position: 'absolute', top: '955px', left: '36px', width: '1226px', height: '202px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', textAlign: 'center', fontSize: '70px', color: 'var(--color-black)' }}>
          <div className="integrate-your-buyer-container" style={{ width: '1226px', position: 'relative', display: 'inline-block' }}>
            <p className="integrate-your-buyer-or-seller" style={{ marginBlockStart: '0', marginBlockEnd: '40px' }}>
              <span>
                <span>INTEGRATE YOUR BUYER OR SELLER APP</span>
              </span>
            </p>
            <p className="and-experience-seamless-perfor" style={{ margin: '0', fontSize: 'var(--font-size-16xl)' }}>
              <span>
                <span> </span>
                <span className="and-experience-seamless">AND EXPERIENCE SEAMLESS PERFORMANCE</span>
                <span> helping you to get shortest motorable distances between two locations</span>
              </span>
            </p>
          </div>
        </div>
        <div className="rectangle-parent" style={{ position: 'absolute', top: '1876px', left: '0', width: '1475.1px', height: '353.8px', fontSize: '45px', color: 'var(--color-white)' }}>
          <div className="rectangle-div" style={{ position: 'absolute', top: '0', left: '1.1px', backgroundColor: '#220f5a', width: '1474px', height: '349px', transform: 'rotate(0.19deg)', transformOrigin: '0 0' }}></div>
          <div className="line-div" style={{ position: 'absolute', top: '53.4px', left: '527.6px', borderRight: '4px solid var(--color-white)', boxSizing: 'border-box', width: '4px', height: '244px' }}></div>
          <img className="ellipse-icon" alt="" src="./public/ellipse-5@2x.png" style={{ position: 'absolute', top: '55.4px', left: '86.6px', borderRadius: '50%', width: '62px', height: '62px', objectFit: 'cover' }} />
          <div className="mapconnect1" style={{ position: 'absolute', top: '55.4px', left: '183.6px' }}>
            <span>M</span>
            <span className="apconnect">APCONNECT</span>
          </div>
          <div className="about-us-faq-container" style={{ position: 'absolute', top: '70.4px', left: '630.6px', fontSize: 'var(--font-size-16xl)' }}>
            <p className="mapconnect-maps">About us</p>
            <p className="mapconnect-maps">FAQ</p>
            <p className="mapconnect-maps">Contact us</p>
          </div>
        </div>
        <img className="frame-icon" alt="" src="./public/frame.svg" style={{ position: 'absolute', top: '1204px', left: '0', width: '1429px', height: '626px', overflow: 'hidden' }} />
      </div>
    </div>
  );
};

export default Desktop;
