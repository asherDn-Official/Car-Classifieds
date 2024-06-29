import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../layouts/MetaData";
import { Link, useNavigate } from "react-router-dom";
import {
  removeItemFromCart,
  removeItemFromWishList,
} from "../../slicers/wishListSlice";
import NewSlider from "../layouts/NewSlider";

export default function WISHlISTS() {
  const { items } = useSelector((state) => state.wishListState);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <Fragment>
      <MetaData title={"My WishList"} />

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

      {items.length == 0 ? (
        <div className="wishlistwidthsection">
          <div>
            <div className="widshlsiuh234hi234i42324">
              <div className="Wishlistmainsectiondidjn34">
                <div className="wishlistsectiondicwishlistname">
                  <h1>No Wishlist</h1>
                  <h1></h1>
                </div>
              </div>
            </div>

            {/* <!---------------------------------Card Section-----------------------------------------------> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="widshlsiuh234hi234i42324">
            <div className="Wishlistmainsectiondidjn34">
              <div className="wishlistsectiondicwishlistname">
                <h1>My Wishlist</h1>
                <h1></h1>
              </div>

              <div
                className="wishlistmaindidbdnn34"
                style={{ paddingBottom: "60px" }}
              >
                <div className="bikeproductdivflexcontenet">
                  {items.map((item) => (
                    <div className="prodcutwidthmain2343">
                      <div className="Prody84843826234">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="Nameofyhenoghisry43383">{item.name}</div>
                      <div className="detailsofthebiejh347">
                        <div className="Dretsah874235uu">{item.bikekm} |</div>
                        <div className="Dretsah874235uu">{item.biketype} |</div>
                        <div className="Dretsah874235uu">{item.bikeyear} |</div>
                        <div className="Dretsah874235uu">
                          {item.bikeemmision}
                        </div>
                      </div>
                      <Link to={`/product/${item.product}`}>
                        <div className="bdfgs7g47833">
                          <button className="Butjhsdfui3478ugy3w">View</button>
                        </div>
                      </Link>
                      <div className="wishliaddlistposition">
                        <img
                          onClick={() =>
                            dispatch(removeItemFromWishList(item.product))
                          }
                          src="/images/Vector23.png"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
