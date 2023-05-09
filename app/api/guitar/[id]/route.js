import Guitar from "models/guitar";
import { connectToDB } from "utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const guitar = await Guitar.findById(params.id).populate("creator");
    if (!guitar) return new Response("guitar Not Found", { status: 404 });

    return new Response(JSON.stringify(guitar), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { guitarName, description, image, price, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing Guitar by ID
    const existingGuitar = await Guitar.findById(params.id);

    if (!existingGuitar) {
      return new Response("Guitar not found", { status: 404 });
    }

    // Update the Guitar with new data
    existingGuitar.guitarName = guitarName;
    existingGuitar.price = price;
    existingGuitar.description = description;
    existingGuitar.image = image;
    existingGuitar.tag = tag;

    await existingGuitar.save();

    return new Response("Successfully updated the Guitars", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Guitar", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the Guitar by ID and remove it
    await Guitar.findByIdAndRemove(params.id);

    return new Response("Guitar deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting Guitar", { status: 500 });
  }
};
