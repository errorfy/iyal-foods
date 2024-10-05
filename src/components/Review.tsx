import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Ananya R",
    username: "@jack",
    body: "Moving on to millets from IyalAgroFoods has certainly been one of the most apt decisions for our good health.  ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Vikram S",
    username: "@jill",
    body: "They are packing some serious flavor profiles, and can easily sub in a multitude of products.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Rajesh T",
    username: "@john",
    body: "IyalAgroFoods brings a wide array of millet-based products for everyone. The footage comes in both good quality and a wide variety.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Meera ",
    username: "@jane",
    body: "However, I DID use their millet flour in some baking, and it turned out fantastic! It is a benefit to stand behind a company with its heart in the right place using natural food.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Sita P",
    username: "@jenny",
    body: "This channel has helped a lot in making my family better food. Thelets are nutritious and delicious.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
//   username,
  body,
}: {
  img: string;
  name: string;
//   username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Review() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl py-10">
        <h1 className="mb-4 text-2xl font-bold text-[#338e2b]">OUR CLIENT REVIEW'S</h1> {/* Heading added here */}

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
