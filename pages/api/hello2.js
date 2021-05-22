import getContent from "../../lib/test";

export default async (req, res) => {
  const content = getContent();
  res.json(content);
};
