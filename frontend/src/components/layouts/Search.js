import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../layouts/css/loginpage.css";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  // const handleChange = (e) => {
  //   setKeyword(e.target.value);
  //   if (keyword.trim() !== "") {
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim() !== "") {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="Searchuiew82348259">
          <div class="Calsadhjfdhij435675huy">
            <input
              type="text"
              placeholder="Search your Bike"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          </div>

          <div class="gfuyweguywer38747243h">
            <button class="Buttomnofthsearch3244">
              <img src="/images/mynaui_search.png" alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
