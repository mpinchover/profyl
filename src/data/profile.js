// Single source of truth for the demo profile. `.profile.json` is the raw
// resume data; this module reshapes it into what the profile components take.
import profileJson from "../../.profile.json";

// The source escapes dollar amounts for LaTeX ("\$12K").
const unescapeText = (text) => text.replace(/\\\$/g, "$");

// "Jul 2024-Present" / "Jun 2023 - Jun 2024" -> { start, end }
const splitDates = (dates = "") => {
  const [start = "", end = ""] = dates.split(/\s*[-–—]\s*/);
  return { start: start.trim(), end: end.trim() };
};

export const profileName = "Matt Pin";
// The only profile this app serves; every other /p/<handle> is a 404.
export const profileHandle = "mpin";

export const workExperience = (profileJson.work_experience ?? []).map((e) => ({
  company: e.company,
  title: e.role,
  details: (e.details ?? []).map(unescapeText),
  ...splitDates(e.dates),
}));

export const education = (profileJson.education ?? []).map((e) => ({
  name: e.university,
  degree: e.degree,
  ...splitDates(e.dates),
}));

export const links = (profileJson.links ?? []).map((url) => ({ url }));
