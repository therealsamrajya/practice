"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import gameData from "@/data/constant.json";

export function HeroSection() {
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");

  // Filter games based on the search term
  const filteredGames = gameData.games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen ">
      <h1 className="text-lg text-center font-bold">
        All Games ({filteredGames.length})
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-1/2 max-w-md focus:outline-none focus:border-blue-500 dark:bg-black dark:text-white dark:border-white/[0.3]"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-[3rem]">
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => (
            <CardContainer className="inter-var" key={index || game.id}>
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-sm:w-[28rem] w-auto sm:w-[30rem] max-sm:ml-[2rem] h-[80vh] rounded-xl p-6 border max-sm:h-fit">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {game.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {game.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={game.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={game.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="#"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        ) : (
          <p className="text-center text-neutral-600 dark:text-neutral-300 mt-6">
            No games found.
          </p>
        )}
      </div>
    </div>
  );
}
