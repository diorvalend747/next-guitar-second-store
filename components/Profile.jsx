import GuitarCard from "./GuitarCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">Koleksi {name}</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <p className="desc text-left mt-3">WA: 08XX-XXXX-XXXX</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <GuitarCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
