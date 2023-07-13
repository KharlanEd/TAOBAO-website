import {servicesList} from "./data/servicesList";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(servicesList);
  }
}
