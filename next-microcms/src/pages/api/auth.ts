import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 401;
  res.setHeader("WWW-authenticate", 'Basic realm="Secure Area"');
  res.end("Basic Auth Required");
}
