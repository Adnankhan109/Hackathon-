import Benefit from "../components/benefit";
import ProductListing from "../components/productlist";

export default function listingPage(){
  return(
    <div>
      <ProductListing/>
      <Benefit/>
    </div>
  );
}