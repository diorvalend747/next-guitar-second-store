import Guitar from "models/guitar";
import { connectToDB } from "utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const guitars = await Guitar.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(guitars), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch guitars created by user", {
      status: 500,
    });
  }
};
