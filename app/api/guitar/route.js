import Guitar from "models/guitar";
import { connectToDB } from "utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const guitar = await Guitar.find({}).populate("creator");

    return new Response(JSON.stringify(guitar), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all guitar", { status: 500 });
  }
};
