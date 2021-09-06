import { createSlice } from "@reduxjs/toolkit";
import table_player from "assets/images/table-player.png";

const initialState = {
  teamBatters: [
    {
      name: "Hussan Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Abrahm Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Jems Lee",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Smith Karter",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Ahmad Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Majun Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: true,
    },
    {
      name: "Sabir Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Hassan Butt",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: true,
    },
  ],
  teamBowlers: [
    {
      name: "Hussan Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },

    {
      name: "Smith Karter",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Ahmad Shaikh",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
    {
      name: "Majun Khan",
      subName: "c abdullah b abdullah",
      runs: "0",
      balls: "2",
      fours: "0",
      sixes: "0",
      strikeRate: "00.00",
      image: table_player,
      isBatting: false,
    },
  ],

  playerStatus: [
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "dot",
      overStatus: "7.6",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "dot",
      overStatus: "7.5",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "dot",
      overStatus: "7.4",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "dot",
      overStatus: "7.3",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "W",
      overStatus: "7.2",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "dot",
      overStatus: "7.1",
    },

    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "2",
      overStatus: "6.6",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "1",
      overStatus: "6.5",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "3",
      overStatus: "6.4",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "6",
      overStatus: "6.3",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "6",
      overStatus: "6.2",
    },
    {
      playerName: "Abdullah to Amjad",
      againstPlayer: "Abdullah to Amjad, and No run",
      ballStatus: "6",
      overStatus: "6.1",
    },
  ],

  squad: [
    { isCaptian: true, name: "Terry Ekstrom Bothman" },
    { isCaptian: false, name: "Roger Vetrovs" },
    { isCaptian: false, name: "Chance Geidt" },
    { isCaptian: false, name: "Roger Korsgaard" },
    { isCaptian: false, name: "Talan Levin" },
    { isCaptian: false, name: "Cristofer Bergson" },
    { isCaptian: false, name: "Emerson Dias" },
    { isCaptian: false, name: "Zaire Rosser" },
    { isCaptian: false, name: "Ahmad Vetrovs" },
    { isCaptian: false, name: "Zain Korsgaard" },
    { isCaptian: false, name: "Ryan Bator" },
  ],
  topPerformencePlayers: [
    {
      name: "Kwadwo Asamoah",
      batting: "63 (18) | SR: 350.00, 3(4s), 8(6s)",
      bowling: "2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)",
    },
    {
      name: "Javi Martinez",
      batting: "63 (18) | SR: 350.00, 3(4s), 8(6s)",
    },
    {
      name: "Javi Martinez",
      batting: "63 (18) | SR: 350.00, 3(4s), 8(6s)",
      bowling: "2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)",
    },

    {
      name: "John Terry",
      bowling: "John Terry",
    },
    {
      name: "Luka Modric",
      batting: "63 (18) | SR: 350.00, 3(4s), 8(6s)",
      bowling: "2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)",
    },
    {
      name: "Martin Vetrovs",
      batting: "63 (18) | SR: 350.00, 3(4s), 8(6s)",
      bowling: "2-9 (3.0) | EC: 6.33, 3(4s), 0(6s)",
    },
  ],
  data: [
    {
      name: "02",
      uv: 0,
      pv: 0,
      amt: 2400,
    },
    {
      name: "04",
      uv: 15,
      pv: 25,
      amt: 2210,
    },
    {
      name: "06",
      uv: 20,
      pv: 26,
      amt: 2290,
    },
    {
      name: "08",
      uv: 30,
      pv: 40,
      amt: 2000,
    },
    {
      name: "10",
      uv: 100,
      pv: 70,
      amt: 2181,
    },
    {
      name: "12",
      uv: 120,
      pv: 90,
      amt: 2500,
    },
    {
      name: "14",
      uv: 150,
      pv: 150,
      amt: 2100,
    },
    {
      name: "16",
      uv: 200,
      pv: 190,
      amt: 2100,
    },
    {
      name: "18",
      uv: 200,
      pv: 190,
      amt: 2100,
    },
  ],
  data2: [
    {
      name: "over 1",
      uv: 10,
      pv: 20,
      amt: 2400,
    },
    {
      name: "over 2",
      uv: 5,
      pv: 25,
      amt: 2210,
    },
    {
      name: "over 3",
      uv: 30,
      pv: 3,
      amt: 2290,
    },
    {
      name: "over 4",
      uv: 12,
      pv: 21,
      amt: 2000,
    },
    {
      name: "over 5",
      uv: 11,
      pv: 10,
      amt: 2181,
    },
    {
      name: "over 6",
      uv: 22,
      pv: 1,
      amt: 2500,
    },
    {
      name: "over 7",
      uv: 5,
      pv: 10,
      amt: 2100,
    },
    {
      name: "over 8",
      uv: 30,
      pv: 20,
      amt: 2100,
    },
    {
      name: "over 9",
      uv: 2,
      pv: 0,
      amt: 2100,
    },

    {
      name: "over 10",
      uv: 30,
      pv: 28,
      amt: 2100,
    },
    {
      name: "over 11",
      uv: 11,
      pv: 10,
      amt: 2100,
    },
    {
      name: "over 12",
      uv: 23,
      pv: 22,
      amt: 2100,
    },
    {
      name: "over 13",
      uv: 21,
      pv: 13,
      amt: 2100,
    },
    {
      name: "over 14",
      uv: 5,
      pv: 25,
      amt: 2100,
    },
    {
      name: "over 15",
      uv: 30,
      pv: 20,
      amt: 2100,
    },
    {
      name: "over 16",
      uv: 3,
      pv: 13,
      amt: 2100,
    },
    {
      name: "over 17",
      uv: 20,
      pv: 29,
      amt: 2100,
    },
    {
      name: "over 18",
      uv: 22,
      pv: 30,
      amt: 2100,
    },
  ],
};

export const playerDetails = createSlice({
  name: "relatedMatchData",
  initialState,
});

export default playerDetails.reducer;