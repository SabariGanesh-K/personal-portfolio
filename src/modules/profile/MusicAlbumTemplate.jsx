import React, { useState } from 'react'
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import {HeartIcon} from "./assets/HeartIcon.jsx";
import {PauseCircleIcon} from "./assets/PauseCircleIcon";
import {NextIcon} from "./assets/NextIcon";
import {PreviousIcon} from "./assets/PreviousIcon";
import {RepeatOneIcon} from "./assets/RepeatOneIcon";
import {ShuffleIcon} from "./assets/ShuffleIcon";
const MusicAlbumTemplate = () => {
    const [liked, setLiked] = useState(false);
  return (
    <Card
    isBlurred
    // className="border-none bg-slate-600 dark:bg-[#1DB954] max-w-[900px] mt-10"
    className="border-none bg-background/60 dark:bg-default-100/50  max-w-[70%] mt-10"
    shadow="sm"
  >
    <CardBody>
      <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
        <div className="relative col-span-6 md:col-span-4">
          <Image
            alt="Album cover"
            className="object-cover"
            height={200}
            shadow="md"
            src="https://firebasestorage.googleapis.com/v0/b/personal-website-cc143.appspot.com/o/B612_20241011_182211_278.jpg?alt=media&token=7f8c8632-881a-4585-8996-e93927758907"
            width="100%"
          />
        </div>

        <div className="flex flex-col col-span-6 md:col-span-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-0">
              <h3 className="text-large font-semibold ">Now Playing </h3>
              <p className="text-large "> </p>
              <h1 className="text-2xl font-medium mt-2 ">&lt; Sabari Ganesh K / &gt;</h1>
            </div>
            <Button
              isIconOnly
              className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
              radius="full"
              variant="light"
              onPress={() => setLiked((v) => !v)}
            >
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </div>

          <div className="flex flex-col mt-3 gap-1">
            <Slider
              aria-label="Music progress"
              classNames={{
                track: "bg-default-500/30",
                thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
              }}
              color="foreground"
              defaultValue={33}
              size="sm"
            />
            <div className="flex justify-between">
              <p className="text-small">1:23</p>
              <p className="text-small text-foreground/50">4:32</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center">
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <RepeatOneIcon className="text-foreground/80" />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PreviousIcon />
            </Button>
            <Button
              isIconOnly
              className="w-auto h-auto data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <PauseCircleIcon size={54} />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <NextIcon />
            </Button>
            <Button
              isIconOnly
              className="data-[hover]:bg-foreground/10"
              radius="full"
              variant="light"
            >
              <ShuffleIcon className="text-foreground/80" />
            </Button>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
  )
}

export default MusicAlbumTemplate