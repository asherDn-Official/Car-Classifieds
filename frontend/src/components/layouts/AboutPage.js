import { useParams, useNavigate } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import NewSlider from "./NewSlider";
import AboutPageNew from "./css/AboutPageNew.css";

export default function AboutPage1() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <div style={{ background: "#fff" }}>
      <MetaData title={"About Page"} />
      <div>
        <div>
          <div>
            <div
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="NewClassifiedFirstHBanne"
            >
              <img src="/images/AboutPageBannerimg.png" alt="" />
            </div>

            <div>
              <NewSlider />
            </div>

            <div>
              <div className="newAboutfifbdjj34434">
                <div className="ABoutpagdfih327478">
                  <img src="/images/AboutPageIMAgdu3.png" alt="" />
                </div>

                <div className="aboug3473535634">
                  <div>
                    <div className="WhyRevnitro22">
                      “ Why Revnitro Classifieds ?”
                    </div>
                    <div className="Revnitriodf2342aBODF">
                      RevNitro Classifieds were established based on followers
                      requests in social media , facilitating the purchase of
                      used vehicles by offering detailed listings and analysis.
                      This platform assists users in identifying suitable
                      options, ensuring a streamlined process for buying
                      pre-owned vehicles with confidence.
                    </div>
                  </div>

                  <div>
                    <div className="WhyRevnitro22">
                      “ What's&nbsp;about&nbsp;Revnitro&nbsp;Classifieds ?”
                    </div>
                    <div className="Revnitriodf2342aBODF">
                      RevNitro Classifieds were established based on followers
                      requests in social media , facilitating the purchase of
                      used vehicles by offering detailed listings and analysis.
                      This platform assists users in identifying suitable
                      options, ensuring a streamlined process for buying
                      pre-owned vehicles with confidence.
                    </div>
                  </div>
                  <div className="revnittroneyweuy3273">--Revnitro Team</div>
                </div>
              </div>
            </div>
            <div className="about42343552" style={{ background: "#fff" }}>
              <div className="abou54269div">
                <div className="mainabout35252">
                  <div>
                    <img src="/images/Group122.png" alt="" />
                  </div>
                  <div className="ABou521327277">Inspected Vehicles</div>
                </div>
                <div className="mainabout35252">
                  <div>
                    <img src="/images/Group123.png" alt="" />
                  </div>
                  <div className="ABou521327277">Verified Documents</div>
                </div>
                <div className="mainabout35252">
                  <div>
                    <img src="/images/Group124.png" alt="" />
                  </div>
                  <div className="ABou521327277">1000 Km Guarantee</div>
                </div>
                <div className="mainabout35252">
                  <div>
                    <img src="/images/Group192.png" alt="" />
                  </div>
                  <div className="ABou521327277">Test Drive</div>
                </div>
                <div className="mainabout35252">
                  <div>
                    <img src="/images/Group193.png" alt="" />
                  </div>
                  <div className="ABou521327277">Best Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
