import Link from "next/link";
import Image from "next/image";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const handleNumberChange = (event) => {
    setPost({ ...post, price: Math.max(0, parseInt(event.target.value)) });
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file !== undefined || post.image === "") {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPost({ ...post, image: reader.result || post.image });
      };
    }
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Koleksi</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} dan tampilkan gitar atau bass anda yang ingin anda jual
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mb-5"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Nama Gitar
          </span>
          <input
            value={post.guitarName}
            onChange={(e) => setPost({ ...post, guitarName: e.target.value })}
            type="text"
            placeholder="Gibson Les Paul"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
          </span>
          <div className="mt-2 gap-5 flex">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="gitar"
                checked={post.tag === "gitar"}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                className="mr-2"
              />
              Gitar
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="bass"
                checked={post.tag === "bass"}
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                className="mr-2"
              />
              Bass
            </label>
          </div>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Deskripsi Gitar
          </span>

          <textarea
            value={post.description}
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            placeholder="Tuliskan deskripsi gitarmu disini"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Upload Gambar Gitar
          </span>

          <input
            onChange={handleUploadImage}
            type="file"
            accept="image/png, image/jpeg"
            // required
            className="form_input"
          />
          {post?.image && (
            <Image
              width={300}
              height={300}
              src={post?.image}
              alt={post?.guitarName}
              className="rounded-lg shadow-sm"
            />
          )}
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Harga
          </span>
          <input
            value={post.price}
            onChange={handleNumberChange}
            type="number"
            placeholder="Rp.1.000.000"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
