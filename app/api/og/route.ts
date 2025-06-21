export const runtime = "edge";

export async function GET() {
  const hour = new Date().getHours();

  let image = "/og-morning.jpg";
  if (hour >= 12 && hour < 17) image = "/og-afternoon.jpg";
  else if (hour >= 17 || hour < 6) image = "/og-evening.jpg";

  return Response.redirect(`https://hellertownpolice.org${image}`, 302); // Use your actual domain here
}
