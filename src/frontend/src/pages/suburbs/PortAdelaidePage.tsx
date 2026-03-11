import { suburbs } from "../../data/suburbs";
import SuburbPage from "../SuburbPage";
const suburb = suburbs.find((s) => s.slug === "port-adelaide")!;
export default function PortAdelaidePage() {
  return <SuburbPage suburb={suburb} />;
}
