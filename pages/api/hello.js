import { withSentry } from "@sentry/nextjs";
import getContent from "../../lib/test";

const handler = async (req, res) => {
  const content = getContent();
  res.json(content);
};

export default withSentry(handler);
