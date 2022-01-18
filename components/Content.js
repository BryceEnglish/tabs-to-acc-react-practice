import Accordion from "./Accordion";
import Tabs from "../components/Tabs/Tabs";

export default function Content(props) {
  const isAccordion = props.isLoggedIn;
  if (isAccordion) {
    return <Accordion />;
  }
  return <Tabs />;
}
