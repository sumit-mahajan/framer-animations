import { Rating } from "@mui/material";

function BuyOptions() {
  return (
    <>
      <div className="my-5 flex gap-10">
        <div className="flex-1">
          <p className="text-3xl uppercase">Vendetta Coat Beige</p>
          <p className="my-3 text-sm text-gray-600 flex items-center">
            <Rating value={4.5} precision={0.1} readOnly />
            <span className="ml-2">
              {"("}4.8 from 324 Reviews{")"}
            </span>
          </p>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Select Color</div>
              <div className="flex gap-3 my-2">
                <div className="rounded-full bg-beige h-[25px] w-[25px] grid place-content-center">
                  <div className="rounded-full bg-white h-[8px] w-[8px]"></div>
                </div>
                <div className="rounded-full bg-black h-[25px] w-[25px]"></div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Select Size</div>
              <div className="flex gap-4 my-2">
                <div className="rounded-2xl border border-gray-300 text-xs py-2 px-5">
                  XS
                </div>
                <div className="rounded-2xl border bg-black text-white border-gray-300 text-xs py-2 px-5">
                  S
                </div>
                <div className="rounded-2xl border border-gray-300 text-xs py-2 px-5">
                  M
                </div>
                <div className="rounded-2xl border border-gray-300 text-xs py-2 px-5">
                  L
                </div>
                <div className="rounded-2xl border border-gray-300 text-xs py-2 px-5">
                  XL
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex space-between">
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-600">
                Total Price
              </div>
              <div className="text-4xl font-semibold my-2">
                $350
                <span className="text-2xl font-light ml-4 line-through text-gray-600 align-middle">
                  $600
                </span>
              </div>
            </div>
            <div className="flex-1 pl-5">
              <div className="text-sm font-medium text-gray-600">Quantity</div>
              <div className="flex items-center gap-4 my-2">
                <div className="rounded-full text-white bg-black h-[35px] w-[35px] text-2xl text-center">
                  -
                </div>
                <p className="font-semibold">1</p>
                <div className="rounded-full text-white bg-black h-[35px] w-[35px] text-2xl text-center">
                  +
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6 mb-4">
            <div className="flex-1 border border-black text-center rounded-3xl text-xs font-medium uppercase py-3 hover:cursor-pointer">
              Add to Cart
            </div>
            <div className="flex-1 bg-black text-white text-center rounded-3xl text-xs font-medium uppercase py-3 hover:cursor-pointer">
              Buy it now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyOptions;
