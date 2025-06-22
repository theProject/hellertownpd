// This file is part of the Hellertown Police Department website project,
// in the FUTURE (at owners discretion and post) willl be licensed under the MIT License.  
// Design and development by theProject. | https://bytheproject.com
// This code is responsible for dynamically generating Open Graph images based on the time of day.
// License is unavailable to copy or distribute while in use by the Hellertown Police Department.
// or until MIT licennse is attached.

// Vercel Edge Function increases performance and reduces latency for dynamic content like Open Graph images - secret sauce

export const runtime = "edge";

export async function GET() {
  const hour = new Date().getHours();

  let imagePath = "/";

  if (hour >= 6 && hour < 12) {
    imagePath += "og-morning.png";
  } else if (hour >= 12 && hour < 17) {
    imagePath += "og-afternoon.jpg";
  } else {
    imagePath += "og-evening.png";
  }

  return Response.redirect(`https://hellertownpolice.org${imagePath}`, 302);
}
