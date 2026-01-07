import { prisma } from "../lib/prisma.client.js";
import crypto from "crypto";

const ALPHABET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function base62Encode(buffer: Buffer) {
  let num = BigInt("0x" + buffer.toString("hex"));
  let out = "";
  const base = BigInt(ALPHABET.length);
  if (num === BigInt(0)) return ALPHABET[0];
  while (num > 0) {
    const rem = num % base;
    out = ALPHABET[Number(rem)] + out;
    num = num / base;
  }
  return out;
}

export async function generateUniqueShortURL(length = 6) {
  // Try a few times before throwing
  for (let attempt = 0; attempt < 5; attempt++) {
    const bytes = crypto.randomBytes(Math.ceil((length * 6) / 8));
    const candidate = base62Encode(bytes).slice(0, length);
    const exists = await prisma.uRL.findUnique({
      where: { shortURL: candidate },
    });
    if (!exists) return candidate;
  }
  throw new Error("Failed to generate unique short URL");
}

export const createShortUrl = async (userId: number, originalURL: string) => {
  const shortURL = await generateUniqueShortURL();
  return prisma.uRL.create({ data: { originalURL, shortURL, userId } });
};

export const getUrlsByUser = async (userId: number) => {
  return prisma.uRL.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
};

export const getUrlById = async (id: number) => {
  return prisma.uRL.findUnique({ where: { id } });
};

export const getUrlByShort = async (shortURL: string) => {
  return prisma.uRL.findUnique({ where: { shortURL } });
};

export const updateOriginalURL = async (id: number, originalURL: string) => {
  return prisma.uRL.update({ where: { id }, data: { originalURL } });
};

export const deleteUrl = async (id: number) => {
  return prisma.uRL.delete({ where: { id } });
};

export const incrementVisits = async (id: number) => {
  return prisma.uRL.update({
    where: { id },
    data: { countVisits: { increment: 1 } },
  });
};
