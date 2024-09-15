import { MANIFEST } from "@/config/constants";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(MANIFEST);
}
