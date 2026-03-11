import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "salisbury")!;
export default function SalisburyPage() {
  return <SuburbPage suburb={suburb} />;
}
