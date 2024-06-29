import { Fragment } from "react";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../slicers/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <MetaData title={"Cart Page"} />
      {items.length == 0 ? (
        <div className="wishlistsectiondivflerx">
          <div className="wishlistwidthsection">
            <div>
              {/* <!------------------------------Wishlist---------------------------> */}

              <div className="mywishlistsewction">
                <img src="/images/WishListBannerIMage.png" alt="" />
                <div className="mywishlistsewctioncontent">
                  <div className="mywishlaboutheading">My Wishlist</div>
                  <div className="mywishltlistparagaraph">
                    "RevNitro Wishlist: Personalize your bike shopping
                    experience. Save and revisit your favorite pre-owned
                    motorcycles with ease."
                  </div>
                </div>
              </div>
              {/* <!------------------------------Wishlist---------------------------> */}

              {/* <!------------------------------------Card Section-----------------------------------------------> */}

              <div className="wishlistdivcarddivsectionnn">
                <div className="wishlistsectiondicwishlistname">
                  <h1>No Wishlist</h1>
                  <h1></h1>
                </div>
              </div>
              {/* <!---------------------------------Card Section-----------------------------------------------> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="wishlistsectiondivflerx">
          <div className="wishlistwidthsection">
            <div>
              {/* <!------------------------------Wishlist---------------------------> */}

              <div className="mywishlistsewction">
                <img src="/images/WishListBannerIMage.png" alt="" />
                <div className="mywishlistsewctioncontent">
                  <div className="mywishlaboutheading">My Wishlist</div>
                  <div className="mywishltlistparagaraph">
                    "RevNitro Wishlist: Personalize your bike shopping
                    experience. Save and revisit your favorite pre-owned
                    motorcycles with ease."
                  </div>
                </div>
              </div>
              {/* <!------------------------------Wishlist---------------------------> */}

              {/* <!------------------------------------Card Section-----------------------------------------------> */}

              <div className="wishlistdivcarddivsectionnn">
                <div className="wishlistsectiondicwishlistname">
                  <h1>My Wishlist</h1>
                  <h1></h1>
                </div>

                <div className="wishlistcardssection">
                  {/* <!----------------------------Bike1---------------------------> */}

                  {items.map((item) => (
                    <div className="wishlistbikecardssecrion">
                      <div className="wishlistbikebackgroundsection">
                        <div className="wishlistimageaddlistrelative">
                          <img className="imagesize" src={item.image} alt="" />
                          <div className="wishliaddlistposition">
                            <img
                              onClick={() =>
                                dispatch(removeItemFromCart(item.product))
                              }
                              src="/images/Vector23.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="wishlistcontentsection">
                          <div className="wishlistbikename">
                            <span>{item.name}</span>
                          </div>
                          <div className="wishlistspecification">
                            <span>
                              {item.bikekm}km | {item.biketype}| {item.bikeyear}{" "}
                              | {item.bikeemmision}
                            </span>
                          </div>
                          <Link to={`/product/${item.product}`}>
                            <button className="wishlistspbikeviewbutton">
                              View
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* <!----------------------------Bike1--------------------------->
                <!----------------------------Bike2---------------------------> */}

                  {/* <!----------------------------Bike2--------------------------->
                <!----------------------------Bike3---------------------------> */}

                  {/* <!----------------------------Bike3--------------------------->
                <!----------------------------Bike4---------------------------> */}

                  {/* 
                <!----------------------------Bike4--------------------------->
                <!----------------------------Bike5---------------------------> */}

                  {/* <!----------------------------Bike5--------------------------->
                <!----------------------------Bike6---------------------------> */}

                  {/* <!----------------------------Bike6---------------------------> */}
                </div>
              </div>
              {/* <!---------------------------------Card Section-----------------------------------------------> */}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
