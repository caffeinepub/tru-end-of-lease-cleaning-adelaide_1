import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "marion")!;
export default function MarionPage() {
  return <SuburbPage suburb={suburb} />;
}
