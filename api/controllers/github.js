import axios from "axios";
import logger from "../utils/logger.js";
import { GITHUB_TOKEN } from "../config/index.js";

const getAllInfo = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/shaban00/sfbu-expressjs-app/contents/data/students.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const { data } = response;

    return res.status(200).json({
      data,
    });
  } catch (error) {
    logger.error("Error fetching GitHub data:", error.message);
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

const getInfoByFieldName = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/shaban00/sfbu-expressjs-app/contents/data/students.json",
      {
        headers: {
          Accept: "application/vnd.github.raw+json",
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    const { data } = response;

    return res.status(200).json({
      data,
    });
  } catch (error) {
    logger.error("Error fetching GitHub data:", error.message);
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
};

export { getAllInfo, getInfoByFieldName };
