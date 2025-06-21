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

  let variants: string[] = [];

  if (hour >= 6 && hour < 12) {
    // Morning opengraph images
    variants = ["og-morning.JPG", "og-morning-2.JPG", "og-image.png"];
  } else if (hour >= 12 && hour < 17) {
    // Afternoon open graph images
    variants = ["og-afternoon-1.jpg", "og-afternoon.JPG", "og-image-hiring.png"];
  } else {
    // Evening & late- night open graph images
    variants = ["og-evening-1.JPG", "og-evening.jpg"];
  }

  // Lil algorithm to pick a random one during all three phases of the day
  const randomImage = variants[Math.floor(Math.random() * variants.length)];

  return Response.redirect(`https://hellertownpolice.org${randomImage}`, 302); 
}
