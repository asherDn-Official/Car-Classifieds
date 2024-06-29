import MetaData from "./MetaData";
import NewSlider from "./NewSlider";
import { useParams, useNavigate } from "react-router-dom";

export default function PolicyPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/BuyPage", { state: { scrollTo: "content-section" } });
  };
  return (
    <div>
      <MetaData title="Policy Page" />
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
        <div className="policy-div-all">
          <h1 className="policyheading">Revnitro Policy</h1>
          <h3 className="policy-sub-heading" style={{ marginTop: "20px" }}>
            Privacy Policy
          </h3>
          <p className="policy-paragraphics">
            At RevNitro Classifieds, safeguarding your privacy is paramount.
            This Privacy Policy elucidates our practices concerning the
            collection, use, and protection of your information when utilizing
            our classifieds platform to list Cars for sale. By utilizing our
            website, you implicitly consent to the collection and utilization of
            your information as delineated herein.
          </p>
          <h3 className="policy-sub-heading">Collection of Information:</h3>

          <p className="policy-paragraphics">
            When you submit a Car for sale on our platform, we gather personal
            data such as your name, contact information, and Car specifications
            to facilitate the sales process. During the inspection phase,
            additional information about the Car's condition and specifications
            may be collected.
          </p>
          <h3 className="policy-sub-heading">Use of Information:</h3>

          <p className="policy-paragraphics">
            The information provided is utilized solely for the verification of
            listings, facilitating communication between RevNitro Classifieds
            and you as the seller, and coordinating the sale process. We do not
            disclose your contact information to potential buyers until the sale
            is finalized.
          </p>
          <h3 className="policy-sub-heading">Storage and Security:</h3>

          <p className="policy-paragraphics">
            Your personal information is securely stored in our database and is
            only accessible to authorized personnel who require access for the
            purpose of facilitating the sale process. Rigorous security measures
            are employed to protect your information from unauthorized access,
            disclosure, alteration, or destruction.
          </p>
          <h3 className="policy-sub-heading">Margin and Payment:</h3>

          <p className="policy-paragraphics">
            RevNitro Classifieds retains a margin of each sale, as stipulated in
            the Memorandum of Understanding (MOM) signed between you and us.
            Upon the successful conclusion of the sale, we promptly remit the
            agreed-upon amount to you, deducting our margin and any applicable
            fees.
          </p>
          <h3 className="policy-sub-heading">Right to Collect Car:</h3>

          <p className="policy-paragraphics">
            You retain the right to collect your Car from us with three days'
            prior notice. Upon receiving your request, we will promptly arrange
            for the return of your Car and any accompanying documents.
          </p>
          <h3 className="policy-sub-heading">
            Communication between Buyer and Seller:
          </h3>

          <p className="policy-paragraphics">
            As an intermediary, we manage all communication between buyers and
            sellers. Direct communication between parties is prohibited until
            the sale is finalized. After the sale is completed, the buyer may
            contact you directly to request a No Objection Certificate (NOC) for
            registration purposes.
          </p>
          <h3 className="policy-sub-heading">Third-Party Links:</h3>

          <p className="policy-paragraphics">
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            third-party sites. We recommend reviewing the privacy policies of
            these websites before providing any personal information.
          </p>
          <h3 className="policy-sub-heading">Changes to Privacy Policy:</h3>

          <p className="policy-paragraphics">
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be reflected on this page, and we encourage
            you to review it periodically for updates.
          </p>
          <h3 className="policy-sub-heading">Contact Us:</h3>

          <p className="policy-paragraphics">
            If you have any inquiries or concerns regarding our Privacy Policy
            or the handling of your personal information, please contact us at
            [contact email or phone number]. By utilizing our platform to list
            Cars for sale, you agree to abide by the terms outlined in this
            Privacy Policy. Thank you for entrusting RevNitro Classifieds with
            your personal information.
          </p>
        </div>
      </div>
    </div>
  );
}
