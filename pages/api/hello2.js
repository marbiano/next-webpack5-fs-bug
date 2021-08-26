import { withSentry } from "@sentry/nextjs";
import getContent from "../../lib/test";

const handler = async (req, res) => {
  throw new Error("API throw error test");
  const content = getContent();
  res.json(content);
};

export default withSentry(handler);
