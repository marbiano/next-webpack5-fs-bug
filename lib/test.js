import fs from "fs";
import path from "path";

export default function getContent() {
  const jsonFile = fs.readFileSync(
    path.resolve(process.cwd() + "/public/test.json"),
    "utf-8"
  );

  const json = JSON.parse(jsonFile);
  return { ...json };
}
