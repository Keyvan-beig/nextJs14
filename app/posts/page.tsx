import { revalidateTag } from "next/cache";

interface products {
  id: number;
  title: string;
  price: string;
}

const posts = async () => {
  const response = await fetch("http://localhost:8000/products", {
    cache: "no-cache",
    next :{
      tags : ['products']
    }
  });
  const products: products[] = await response.json();

  const addProduct = async (e: FormData) => {
    "use server";

    const title = e.get("title");
    const price = e.get("price");

    const newProduct = { title: title, price: price };

    await fetch("http://localhost:8000/products", {
      method: 'POST',
      body : JSON.stringify(newProduct) ,
      headers : {
        'Content-type' : 'application/json'
      }
    });

    revalidateTag('products')
  };

  return (
    <>
      <form
        className="bg-slate-500 grid w-[50%] mx-auto gap-5 p-5 my-9 rounded-lg"
        action={addProduct}
      >
        <input
          className="p-2 outline-none rounded-md"
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          className="p-2 outline-none rounded-md"
          type="text"
          name="title"
          placeholder="price"
        />
        <button className="p-2 text-white  cursor-pointer outline-none rounded-md bg-slate-700">
          submit
        </button>
      </form>

      <div className="w-[50%] mx-auto text-white flex flex-wrap gap-3">
        {products.map((item) => (
          <div key={item.id} className="bg-slate-500 p-3 rounded-lg grid gap-3">
            <p>title : {item.title}</p>
            <p>price : {item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default posts;
