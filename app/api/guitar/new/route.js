import Guitar from "models/guitar";
import { connectToDB } from "utils/database";

export const POST = async (req) => {
  const { userId, guitarName, description, image, price, tag } =
    await req.json();
  try {
    await connectToDB();

    const newGuitar = new Guitar({
      creator: userId,
      price,
      guitarName,
      description,
      image,
      tag,
    });

    await newGuitar.save();

    return new Response(JSON.stringify(newGuitar), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all guitars", { status: 500 });
  }
};
