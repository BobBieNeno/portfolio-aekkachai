import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import Stories from "react-insta-stories";
import LoadingImage from "../LoadingImage/LoadingImage";

type StoryAction = (action: "pause" | "play" | string, bufferAction?: boolean) => void;

type StoryContentProps = {
  action: StoryAction;
  isPaused: boolean;
};

type Activity = {
  title: string;
  time: string;
  caption: string;
  image: string;
  fallbackImage: string;
  duration: number;
};

const activities: Activity[] = [
  {
    title: "Badminton",
    time: "23w",
    caption: "Playing badminton keeps me active, focused, and energized for coding and design.",
    image: "/img/Badminton.jpg",
    fallbackImage: "/img/Badminton.png",
    duration: 5200,
  },
  {
    title: "Coffee",
    time: "21w",
    caption: "Quiet cafe corners for planning, sketching interfaces, and resetting my focus.",
    image: "/img/Coffee.png",
    fallbackImage: "/img/Coffee.png",
    duration: 4800,
  },
  {
    title: "University Life",
    time: "19w",
    caption: "Teamwork, presentations, and practical problem solving shaped how I work.",
    image: "/img/university-life.jpg",
    fallbackImage: "/img/university-life.jpg",
    duration: 5600,
  },
  {
    title: "Travel",
    time: "17w",
    caption: "New places help me notice details, culture, and fresh ways to think creatively.",
    image: "/img/travel.jpg",
    fallbackImage: "/img/travel.jpg",
    duration: 5000,
  },
  {
    title: "Coding",
    time: "14w",
    caption: "Coding is my passion, and I enjoy building projects that solve real problems.",
    image: "/img/Coding.jpg",
    fallbackImage: "/img/Coding.jpg",
    duration: 4600,
  },
  {
    title: "Poker",
    time: "12w",
    caption: "Poker nights with friends sharpen my focus, strategy, and decision-making skills.",
    image: "/img/poker.jpg",
    fallbackImage: "/img/poker.jpg",
    duration: 5200,
  },
  {
    title: "Snooker",
    time: "10w",
    caption: "Snooker is a game of precision and patience, much like coding and design.",
    image: "/img/Snooker.JPG",
    fallbackImage: "/img/Snooker.JPG",
    duration: 5000,
  },
  {
    title: "hangout with friends",
    time: "9w",
    caption: "Spending time with friends helps me recharge and gain new perspectives for my work.",
    image: "/img/hangout.jpg",
    fallbackImage: "/img/hangout.jpg",
    duration: 5000,
  },
  {
    title: "chess",
    time: "8w",
    caption: "Chess is a game of strategy and foresight, skills that I apply to coding and design challenges.",
    image: "/img/chess.png",
    fallbackImage: "/img/chess.png",
    duration: 5200,
  },
  {
    title: "GYM",
    time: "7w",
    caption: "Regular workouts at the gym keep me physically fit and mentally sharp for coding and design tasks.",
    image: "/img/GYM.jpg",
    fallbackImage: "/img/GYM.jpg",
    duration: 5200,
  },
];

const avatarImage = "/images/activity/avatar.jpg";
const avatarFallback = "/img/IMG_Avatar.png";

function ActivityStory({
  activity,
  action,
  userPausedRef,
}: Partial<StoryContentProps> & {
  activity: Activity;
  userPausedRef: MutableRefObject<boolean>;
}) {
  useEffect(() => {
    if (!userPausedRef.current) action?.("pause", true);
  }, [activity.title, action, userPausedRef]);

  const handleImageReady = () => {
    if (!userPausedRef.current) action?.("play", true);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black text-white">
      <LoadingImage
        src={activity.image}
        fallbackSrc={activity.fallbackImage}
        alt={activity.title}
        onLoad={handleImageReady}
        className="h-full w-full object-cover"
        wrapperClassName="loading-image--dark"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-black/88" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_28%,rgba(255,255,255,0.06)_78%)]" />

      <div className="absolute left-5 right-24 top-7 z-10 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 rounded-full border border-white/12 bg-black/18 py-1.5 pl-1.5 pr-4 backdrop-blur-md">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-white/35 bg-white/15">
            <LoadingImage
              src={avatarImage}
              fallbackSrc={avatarFallback}
              alt="Profile avatar"
              className="h-full w-full object-cover"
              wrapperClassName="loading-image--dark"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-5">
              {activity.title}
            </span>
            <span className="block text-xs leading-4 text-white/62">
              {activity.time}
            </span>
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        <div className="rounded-[24px] border border-white/14 bg-black/24 p-5 shadow-2xl backdrop-blur-md">
          <span className="mb-3 inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-medium text-white/78">
            Activity story
          </span>
          <h3 className="mb-3 text-3xl font-semibold leading-none tracking-tight">
            {activity.title}
          </h3>
          <p className="text-sm leading-6 text-white/74">{activity.caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function ActivityHighlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStoryPaused, setIsStoryPaused] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    userPausedRef.current = isStoryPaused;
  }, [isStoryPaused]);

  const stories = useMemo(
    () =>
      activities.map((activity) => ({
        duration: activity.duration,
        content: (storyProps: StoryContentProps) => (
          <ActivityStory
            activity={activity}
            userPausedRef={userPausedRef}
            {...storyProps}
          />
        ),
      })),
    []
  );

  return (
    <section
      id="activity"
      className="relative overflow-hidden bg-[#090909] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.2),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="container relative">
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
              Activity Highlights
            </p>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Life, moments, and experiences.
              A journey that transcends the limits of the code.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/58">
            A collection of moments, hobbies, and experiences that inspire creativity, build connections, and shape my journey beyond code.
          </p>
        </div>

        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(300px,440px)_1fr] lg:items-center">
          <div className="mx-auto w-full max-w-full rounded-[34px] border border-white/12 bg-white/8 p-3 shadow-story backdrop-blur sm:max-w-[430px]">
            <div className="relative overflow-hidden rounded-[28px] bg-black">
              <div className="absolute right-5 top-7 z-30 flex shrink-0 items-center gap-2 rounded-full border border-white/12 bg-black/28 px-3 py-2 backdrop-blur-md">
                <button
                  type="button"
                  className="grid h-6 w-6 place-items-center text-white/90"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsStoryPaused((paused) => !paused);
                  }}
                  aria-label={isStoryPaused ? "Play story" : "Pause story"}
                >
                  {isStoryPaused ? (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5.14v13.72c0 .78.86 1.25 1.52.82l10.18-6.86a.98.98 0 0 0 0-1.64L9.52 4.32A.98.98 0 0 0 8 5.14Z" />
                    </svg>
                  ) : (
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 5.5A1.5 1.5 0 0 1 8.5 4h1A1.5 1.5 0 0 1 11 5.5v13A1.5 1.5 0 0 1 9.5 20h-1A1.5 1.5 0 0 1 7 18.5v-13Zm6 0A1.5 1.5 0 0 1 14.5 4h1A1.5 1.5 0 0 1 17 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-13Z" />
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className="grid h-6 w-6 place-items-center text-white/90"
                  onClick={(event) => event.stopPropagation()}
                  aria-label="More story options"
                >
                  <span className="flex items-center gap-0.5">
                    <span className="h-1 w-1 rounded-full bg-white" />
                    <span className="h-1 w-1 rounded-full bg-white" />
                    <span className="h-1 w-1 rounded-full bg-white" />
                  </span>
                </button>
              </div>
              <Stories
                stories={stories}
                currentIndex={currentIndex}
                defaultInterval={5000}
                height="min(76vh, 720px)"
                isPaused={isStoryPaused}
                keyboardNavigation
                loop
                onStoryStart={(index: number) => setCurrentIndex(index)}
                preventDefault
                preloadCount={3}
                progressContainerStyles={{
                  left: 20,
                  right: 20,
                  top: 14,
                  width: "auto",
                  zIndex: 20,
                }}
                progressWrapperStyles={{
                  background: "rgba(255,255,255,0.22)",
                  height: 3,
                  borderRadius: 999,
                  overflow: "hidden",
                }}
                progressStyles={{
                  background: "#fff",
                  borderRadius: 999,
                }}
                storyContainerStyles={{
                  background: "#000",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
                width="100%"
              />
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-6">
              <span className="font-mono text-xs text-white/40">
                Story {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(activities.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {activities[currentIndex].title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">
                {activities[currentIndex].caption}
              </p>
            </div>

            <div className="flex snap-x gap-2 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
              {activities.map((activity, index) => (
                <button
                  key={activity.title}
                  type="button"
                  className={`group min-w-[95px] rounded-xl border p-1 transition duration-300
                          ${index === currentIndex
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsStoryPaused(false);
                  }}
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-lg">
                    <LoadingImage
                      src={activity.image}
                      fallbackSrc={activity.fallbackImage}
                      alt={activity.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      wrapperClassName="loading-image--dark"
                    />
                  </div>

                  <div className="mt-1 flex items-center justify-between px-0.5">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium text-white">
                        {activity.title}
                      </p>
                      <p className="text-[9px] text-white/40">
                        {activity.time}
                      </p>
                    </div>

                    <div
                      className={`h-1 w-1 rounded-full ${index === currentIndex
                        ? "bg-emerald-400"
                        : "bg-white/20"
                        }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
