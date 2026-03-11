import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "morphett-vale")!;
export default function MorphettValePage() {
  return <SuburbPage suburb={suburb} />;
}
