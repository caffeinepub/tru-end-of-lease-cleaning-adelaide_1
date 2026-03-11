import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "glenelg")!;
export default function GlenelgPage() {
  return <SuburbPage suburb={suburb} />;
}
