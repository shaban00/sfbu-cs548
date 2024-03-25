import axios from "axios";
import logger from "../utils/logger.js";
import { GITHUB_TOKEN } from "../config/index.js";

const getAllInfo = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/shaban00/sfbu-cs548/contents/api/data/github_settings.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const { data } = response;

    return res.status(200).json({
      ...data,
    });
  } catch (error) {
    logger.error("Error fetching GitHub data:", error.message);
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

const getInfoByFieldName = async (req, res) => {
  const { field_name } = req.body;
  try {
    const response = await axios.get(
      "https://api.github.com/repos/shaban00/sfbu-cs548/contents/api/data/github_settings.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const { ecomStore, timezone } = response?.data;
    const value = ecomStore[field_name];

    return res.status(200).json({
      field_name: value,
      timezone,
    });
  } catch (error) {
    logger.error("Error fetching GitHub data");
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

export { getAllInfo, getInfoByFieldName };
