import Image from "next/image";

// Placeholder image component that generates unique gradient images
export function PlaceholderImage({
  alt,
  width = 400,
  height = 300,
  index = 0,
}: {
  alt: string;
  width?: number;
  height?: number;
  index?: number;
}) {
  const gradients = [
    "from-blue-500 to-purple-600",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-orange-400",
    "from-orange-400 to-red-500",
    "from-green-500 to-blue-500",
  ];

  const gradient = gradients[index % gradients.length];
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:hsl(${index * 70},70%,60%);stop-opacity:1" />
          <stop offset="100%" style="stop-color:hsl(${(index * 70 + 180) % 360},70%,50%);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="50%" font-size="24" fill="white" text-anchor="middle" dy=".3em" font-weight="bold">
        Project ${index + 1}
      </text>
    </svg>
  `;

  const dataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

  return (
    <Image
      src={dataUrl}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
      priority={index < 2}
    />
  );
}
