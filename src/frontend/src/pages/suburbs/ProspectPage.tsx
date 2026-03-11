import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "prospect")!;
export default function ProspectPage() {
  return <SuburbPage suburb={suburb} />;
}
