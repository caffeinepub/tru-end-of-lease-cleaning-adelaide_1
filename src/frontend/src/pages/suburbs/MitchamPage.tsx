import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "mitcham")!;
export default function MitchamPage() {
  return <SuburbPage suburb={suburb} />;
}
