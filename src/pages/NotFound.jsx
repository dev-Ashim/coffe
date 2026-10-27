import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title={"This cup\nis empty."}>
      The page you're looking for doesn't exist. <Link to="/">Head back home</Link>.
    </PageHero>
  );
}
