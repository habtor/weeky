"use strict";

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos = startPos;

    const walkInterval = setInterval(() => {
      currentPos += STEP_SIZE_PX;
      img.style.left = currentPos + "px";

      if (currentPos >= stopPos) {
        clearInterval(walkInterval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    img.src = DANCING_CAT_URL;

    const dancInterval = setTimeout(() => {
      img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
      clearTimeout(dancInterval);
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  const catWalkDancWalk = async () => {
    try {
      await walk(img, startPos, centerPos);
      await dance(img);
      await walk(img, centerPos, stopPos);
    } catch {
      console.log("error");
    }
    catWalk();
  };

  catWalkDancWalk();
}

window.addEventListener("load", catWalk);
