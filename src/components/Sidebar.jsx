import React, { useContext } from 'react';

// import Link
import { Link } from 'react-router-dom';

// Import Icons
import { IoMdArrowForward } from 'react-icons/io';
import { FaRegTrashCan } from 'react-icons/fa6';

// Import components
import CartItem from '../components/CartItem';

// Import Sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

// Import Cart Context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'}
      fixed top-0 h-full w-full md:w-[55vw] lg:w-[50vw] xl:w-[30vw]
      bg-white shadow-2xl transition-all duration-1000 ease-out z-20 px-4 lg:px-[35px] flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>

      {/* Cart items section */}
      <div
        className="flex-1 flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      {/* Total and Clear Cart Section */}
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* Clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500
            text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FaRegTrashCan />
          </div>
        </div>
        <Link to='/' className='bg-gray-200 flex p-4 justify-center
        items-center text-primary w-full font-medium'>View cart</Link>
        <Link to='/' className='bg-primary flex p-4 justify-center
        items-center text-white w-full font-medium'>Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
