"use client";

import ShowCard from "./ShowCard";
import GameCard from "./GameCard";
import MusicCard from "./MusicCard";
import Image from "next/image";

type GameStatus = "completed" | "playing" | "bucket";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  status: GameStatus;
  progress?: number;
}

const shows = [
  {
    id: "1",
    name: "Big Bang Theory",
    description: "A classic show I enjoy for its humor and character dynamics. Great to watch when I want something light and entertaining.",
    image: "/big banf .jpeg",
  },
  {
    id: "2",
    name: "Dragon Ball (Classic)",
    description: "Wanted to watch the anime which started it all. Currently on episode 90 as of November 13. The fights and characters are great.",
    image: "/dragin ball.jpg",
    progress: 90,
  },
];

const anime = [
  {
    id: "1",
    name: "One Piece",
    description: "My absolute favorite anime. The world-building, the characters, the emotional moments - everything about One Piece is incredible. I have Luffy and Zoro collectibles that I'm really proud of!",
    image: "/one piece.webp",
  },
  {
    id: "2",
    name: "Naruto",
    description: "Another favorite of mine. The character development, the fights, and the emotional journey of Naruto and his friends really got to me. The themes of friendship and never giving up hit hard.",
    image: "/Naruto_Shippuden.JPG.webp",
  },
  {
    id: "3",
    name: "Vinland Saga",
    description: "One of the best animes. Shows character development, anger control, and becoming a better version of oneself.",
    image: "/vinland saga.jpg",
  },
];

const completedGames: Game[] = [
  {
    id: "1",
    title: "Assassin's Creed Saga",
    description: "Running on rooftops and jumping into haystacks never gets old! The parkour is so cool and I love being a sneaky assassin.",
    image: "/Assasijn creed.png",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "Red Dead Redemption 2",
    description: "Best cowboy game ever! I spent so much time just riding my horse and exploring. The world is absolutely massive and beautiful.",
    image: "/rdr 2.jpg",
    status: "completed" as const,
  },
  {
    id: "3",
    title: "Detroit: Become Human",
    description: "Every choice you make changes the story! I replayed it so many times just to see all the different endings. So cool!",
    image: "/Detroit_Become_Human.jpg",
    status: "completed" as const,
  },
  {
    id: "4",
    title: "Life Is Strange",
    description: "The soundtrack is amazing and rewinding time to fix mistakes is the coolest power ever. Such a chill and beautiful game!",
    image: "/Life_Is_Strange_cover_art.png",
    status: "completed" as const,
  },
  {
    id: "5",
    title: "God of War (2018) & Ragnarok",
    description: "Kratos throwing his axe and calling it back is the most satisfying thing! The combat is so epic and the story is incredible.",
    image: "/god of war s.avif",
    status: "completed" as const,
  },
  {
    id: "6",
    title: "GTA 5",
    description: "Classic chaos simulator! Driving around causing mayhem with three different characters is just pure fun. Never gets boring!",
    image: "/Grand_Theft_Auto_V.png",
    status: "completed" as const,
  },
  {
    id: "7",
    title: "The Witcher 3",
    description: "The world is so huge and every side quest feels like a main story. Fighting monsters and playing Gwent is addicting!",
    image: "/Witcher_3_cover_art.jpg",
    status: "completed" as const,
  },
];

const bucketListGames: Game[] = [
  {
    id: "8",
    title: "The Last of Us Part I & II",
    description: "Heard so much about the emotional storytelling and character development. Can't wait to experience Joel and Ellie's journey.",
    image: "/last of us _.jpg",
    status: "bucket" as const,
  },
  {
    id: "9",
    title: "Ghost of Tsushima",
    description: "The visuals and samurai combat look absolutely stunning. This one's been on my list for a while.",
    image: "/Ghost_of_Tsushima.jpg",
    status: "bucket" as const,
  },
  {
    id: "10",
    title: "Death Stranding",
    description: "The unique gameplay and Kojima's storytelling style intrigue me. Want to see what all the hype is about.",
    image: "/death starnding.webp",
    status: "bucket" as const,
  },
];

const favoriteArtists = [
  {
    id: "1",
    name: "Diljit Dosanjh",
    description: "One of the most hardworking punjabi artist .. monnchild era is one of his goated album which got me hooked to his beats.",
    spotifyUrl: "https://open.spotify.com/artist/2FKWNmZWDBZR4dE5KX4plR?si=VelKcBNaRKS1gFypByDGJg",
    image: "/diljit dosanjh.jpeg",
  },
  {
    id: "2",
    name: "Karan Aujla",
    description: "Can never get bored to his songs, always feels fresh and i listen to them over and over.",
    spotifyUrl: "https://open.spotify.com/artist/6DARBhWbfcS9E4yJzcliqQ?si=HtPh_p1eS8eazGQl56zO7A",
    image: "/karan aujla.jpeg",
  },
  {
    id: "3",
    name: "Mohit Chauhan",
    description: "One of the most underrated singer of bollywood nowadays, his songs are what literally made movies famous",
    spotifyUrl: "https://open.spotify.com/artist/5GnnSrwNCGyfAU4zuIytiS?si=qtuJLmBlSWeDQ31_rjg21Q",
    image: "/mohit chauhan.jpg",
  },
  {
    id: "4",
    name: "Kunwxrr",
    description: "Childhood friend. He's changing the punjabi hip hop scene with his fire beats. His music is fire so have a look at his songs. P.S. I am giving him free advertisement",
    spotifyUrl: "https://open.spotify.com/artist/2ln8u0bAiqCrbEeskIGOpL?si=zs009cS1TlCzAonm_5dfGg",
    image: "/kunwarr.png",
  },
];

export default function HobbiesPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Hobbies
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
            Things I enjoy when I&apos;m not coding
          </p>
        </div>

        {/* Fav Artists Section - Moved to Top */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Fav Artists
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {favoriteArtists.map((artist, index) => (
              <MusicCard key={artist.id} artist={artist} index={index} />
            ))}
          </div>
        </section>

        {/* Shows Currently Watching Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Shows Currently Watching
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {shows.map((show, index) => (
              <ShowCard key={show.id} show={show} index={index} />
            ))}
          </div>
        </section>

        {/* Fav Shows Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Fav Shows
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {anime.map((animeItem, index) => (
              <ShowCard key={animeItem.id} show={animeItem} index={index} />
            ))}
          </div>
        </section>

        {/* Fav Games Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Fav Games
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {completedGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </section>

        {/* Games on Bucket List Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Games on Bucket List
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {bucketListGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </section>

        {/* Messi Section */}
        <section className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 sm:gap-3 bg-white/80 dark:bg-[#151515] backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3.5 border border-white/30 dark:border-gray-700/30 shadow-lg inline-flex">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/50 dark:ring-gray-700/50">
              <Image
                src="/messi-jersey-real-madridjpg.jpg"
                alt="Messi"
                fill
                className="object-cover"
                loading="lazy"
                sizes="80px"
                quality={100}
                priority={false}
              />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
              Oh also, Messi is the GOAT 🐐
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
