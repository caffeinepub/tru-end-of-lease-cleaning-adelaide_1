import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "tea-tree-gully")!;
export default function TeaTreeGullyPage() {
  return <SuburbPage suburb={suburb} />;
}
