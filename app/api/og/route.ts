export const runtime = "edge";

export async function GET() {
  const hour = new Date().getHours();

  let variants: string[] = [];

  if (hour >= 6 && hour < 12) {
    // Morning
    variants = ["og-morning.JPG", "og-morning-2.JPG", "og-image.png"];
  } else if (hour >= 12 && hour < 17) {
    // Afternoon
    variants = ["og-afternoon-1.jpg", "og-afternoon.JPG", "og-image-hiring.png"];
  } else {
    // Evening & night
    variants = ["og-evening-1.JPG", "og-evening.jpg"];
  }

  // Pick a random one
  const randomImage = variants[Math.floor(Math.random() * variants.length)];

  return Response.redirect(`https://hellertownpolice.org${randomImage}`, 302); 
}
