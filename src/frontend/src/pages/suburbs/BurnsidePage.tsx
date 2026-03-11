import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "burnside")!;
export default function BurnsidePage() {
  return <SuburbPage suburb={suburb} />;
}
