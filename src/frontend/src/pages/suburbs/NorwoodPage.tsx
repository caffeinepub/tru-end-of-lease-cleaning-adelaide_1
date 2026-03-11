import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "norwood")!;
export default function NorwoodPage() {
  return <SuburbPage suburb={suburb} />;
}
