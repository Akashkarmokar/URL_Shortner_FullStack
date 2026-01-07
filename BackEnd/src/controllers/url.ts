import type { Request, Response } from "express";
import {
  createShortUrl,
  getUrlsByUser,
  getUrlById,
  updateOriginalURL,
  deleteUrl,
  getUrlByShort,
  incrementVisits,
} from "../services/url.js";
import type { AuthRequest } from "../middleware/auth.js";

export const createUrl = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const { originalURL } = req.body;
    if (!originalURL)
      return res.status(400).json({ error: "originalURL is required" });

    const created = await createShortUrl(userId, originalURL);
    return res.status(201).json({ url: created });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  }
};

export const listUrls = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const urls = await getUrlsByUser(userId);
    return res.status(200).json({ urls });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUrl = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const id = Number(req.params.id);
    const url = await getUrlById(id);
    if (!url) return res.status(404).json({ error: "URL not found" });
    if (url.userId !== userId)
      return res.status(403).json({ error: "Forbidden" });
    return res.status(200).json({ url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUrl = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const id = Number(req.params.id);
    const { originalURL } = req.body;
    if (!originalURL)
      return res.status(400).json({ error: "originalURL is required" });

    const url = await getUrlById(id);
    if (!url) return res.status(404).json({ error: "URL not found" });
    if (url.userId !== userId)
      return res.status(403).json({ error: "Forbidden" });

    const updated = await updateOriginalURL(id, originalURL);
    return res.status(200).json({ url: updated });
  } catch (err: any) {
    console.error(err);
    return res
      .status(500)
      .json({ error: err.message || "Internal server error" });
  }
};

export const removeUrl = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId!;
    const id = Number(req.params.id);
    const url = await getUrlById(id);
    if (!url) return res.status(404).json({ error: "URL not found" });
    if (url.userId !== userId)
      return res.status(403).json({ error: "Forbidden" });

    await deleteUrl(id);
    return res.status(200).json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Redirect handler (no auth required)
export const redirectShortUrl = async (req: Request, res: Response) => {
  try {
    const short = req.params.short;
    const url = await getUrlByShort(short);
    if (!url) return res.status(404).json({ error: "Short URL not found" });

    await incrementVisits(url.id);
    return res.redirect(url.originalURL);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
