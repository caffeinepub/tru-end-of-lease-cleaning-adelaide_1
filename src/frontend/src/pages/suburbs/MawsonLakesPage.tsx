import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "mawson-lakes")!;
export default function MawsonLakesPage() {
  return <SuburbPage suburb={suburb} />;
}
