import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "unley")!;
export default function UnleyPage() {
  return <SuburbPage suburb={suburb} />;
}
